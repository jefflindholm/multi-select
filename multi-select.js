'use strict';

var _elemental = require('elemental');

var _ = require('lodash');
var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
    displayName: 'exports',

    propTypes: {
        clearable: React.PropTypes.bool,
        searchable: React.PropTypes.bool,
        initialValues: React.PropTypes.arrayOf(React.PropTypes.object),
        items: React.PropTypes.arrayOf(React.PropTypes.object),
        hiddenKey: React.PropTypes.string,
        labelKey: React.PropTypes.string,
        valueKey: React.PropTypes.string
    },
    _ariaGetListId: function _ariaGetListId() {
        return this.state.controlId + '_list';
    },
    getDefaultProps: function getDefaultProps() {
        return {
            items: [],
            initialValues: [],
            onChange: function onChange() {},
            valueKey: 'value',
            labelKey: 'label',
            hiddenKey: 'hidden',
            clearable: true,
            searchable: false,
            type: 'bootstrap'
        };
    },
    getInitialState: function getInitialState() {
        return {
            controlId: _.uniqueId('rss_'),
            options: [],
            selections: [],
            title: this.props.placeholder,
            listOpen: false
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(newProps) {
        var data = newProps.items.map(function (item) {
            var newItem = {};
            newItem[newProps.valueKey] = item[newProps.valueKey];
            newItem[newProps.labelKey] = item[newProps.labelKey];
            newItem[newProps.hiddenKey] = item[newProps.hiddenKey];
            return newItem;
        });
        var selections = newProps.initialValues.map(function (val) {
            var index = _.findIndex(data, newProps.valueKey, val[newProps.valueKey]);
            data[index].selected = true;
            return data[index];
        });
        this.setState({ options: data, selections: selections });
    },
    valueClicked: function valueClicked(option) {
        var index = _.findIndex(this.state.options, this.props.valueKey, option[this.props.valueKey]);
        var selIndex = _.findIndex(this.state.selections, this.props.valueKey, option[this.props.valueKey]);

        var selected = selIndex === -1;
        if (!selected) {
            this.state.selections.splice(selIndex, 1);
        } else {
            this.state.selections.push(option);
        }
        this.state.options[index].selected = selected;
        this.setState({
            selections: this.state.selections,
            options: this.state.options
        });
        this.props.onChange(option, this.state.selections);
    },
    renderOption: function renderOption(dataOption, index) {
        var itemKey = "drop_li_" + dataOption[this.props.valueKey],
            indexRef = 'option_' + index,
            ariaDescendantId = this.state.controlId + '_aria_' + indexRef,
            classes = classNames('r-ss-dropdown-option', {
            'r-ss-selected': dataOption.selected
        });
        if (dataOption[this.props.hiddenKey]) {
            classes += ' hidden-li';
        }

        return React.createElement(
            'li',
            { ref: indexRef,
                id: ariaDescendantId,
                tabIndex: '0',
                'data-option-index': index,
                className: classes,
                'aria-selected': dataOption.selected,
                key: itemKey,
                'data-option-value': dataOption[this.props.valueKey],
                onClick: this.valueClicked.bind(null, dataOption),
                role: 'option' },
            dataOption[this.props.labelKey]
        );
    },
    buildOptions: function buildOptions() {
        var ops = this.state.options.map(this.renderOption);

        return React.createElement(
            'div',
            { ref: 'dropdownContent', className: 'r-ss-dropdown', onKeyDown: this._handleKeyDown },
            React.createElement(
                'div',
                { ref: 'scrollWrap', className: 'r-ss-options-wrap' },
                React.createElement(
                    'ul',
                    { className: 'r-ss-dropdown-options',
                        ref: 'dropdownOptionsList',
                        tabIndex: '-1',
                        id: this._ariaGetListId(),
                        role: 'listbox',
                        'aria-expanded': this.state.isOpen },
                    ops
                )
            )
        );
    },
    toggleList: function toggleList() {
        this.setState({ listOpen: !this.state.listOpen });
    },
    clearSelected: function clearSelected() {
        var data = this.state.options;
        var i = 0;
        for (i = 0; i < data.length; i++) {
            data[i].selected = false;
        }
        this.setState({ selections: [], options: data });
        this.props.onChange(null, []);
    },
    render: function render() {
        if (this.props.type === 'elemental') {
            return this.render_elemental();
        } else if (this.props.type === 'bootstrap') {
            return this.render_bootstrap();
        }
        return this.render_bootstrap();
    },
    render_bootstrap: function render_bootstrap() {
        var menu = this.state.listOpen ? this.buildOptions() : null;

        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'input-group' },
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    autofocus: true,
                    onChange: this.handleFilterChange,
                    readOnly: true,
                    value: this.state.selections.length + ' selected' }),
                this.props.clearable && this.state.selections.length > 0 ? React.createElement(
                    'span',
                    { className: 'input-group-btn' },
                    React.createElement(
                        'button',
                        { className: 'btn btn-default', type: 'button', onClick: this.clearSelected },
                        React.createElement('span', { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true' })
                    )
                ) : null,
                React.createElement(
                    'span',
                    { className: 'input-group-btn' },
                    React.createElement(
                        'button',
                        { className: 'btn btn-default', onClick: this.toggleList, type: 'button' },
                        React.createElement('span', { 'aria-hidden': 'true', className: "glyphicon glyphicon-triangle-" + (this.state.listOpen ? 'top' : 'bottom') })
                    )
                )
            ),
            menu
        );
    },
    render_elemental: function render_elemental() {
        var menu = this.state.listOpen ? this.buildOptions() : null;
        return React.createElement(
            'div',
            null,
            React.createElement(
                _elemental.InputGroup,
                { contiguous: true },
                React.createElement(
                    _elemental.InputGroup.Section,
                    { grow: true },
                    React.createElement(_elemental.FormInput, { autofocus: true,
                        onChange: this.handleFilterChange,
                        readOnly: true,
                        value: this.state.selections.length + ' selected' })
                ),
                this.props.clearable && this.state.selections.length > 0 ? React.createElement(
                    _elemental.InputGroup.Section,
                    null,
                    React.createElement(
                        _elemental.Button,
                        { type: 'hollow-danger', onClick: this.clearSelected },
                        React.createElement(_elemental.Glyph, { icon: 'circle-slash' })
                    )
                ) : null,
                React.createElement(
                    _elemental.InputGroup.Section,
                    null,
                    React.createElement(
                        _elemental.Button,
                        { onClick: this.toggleList },
                        React.createElement(_elemental.Glyph, { icon: "triangle-" + (this.state.listOpen ? 'up' : 'down') })
                    )
                )
            ),
            menu
        );
    }
});