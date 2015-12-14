var _ = require('lodash');
var React = require('react');
var classNames = require('classnames');

import {Button, FormInput, Glyph, InputGroup} from 'elemental';

module.exports = React.createClass({
    propTypes: {
        clearable: React.PropTypes.bool,
        searchable: React.PropTypes.bool,
        initialValues: React.PropTypes.arrayOf(React.PropTypes.object),
        items: React.PropTypes.arrayOf(React.PropTypes.object),
        hiddenKey: React.PropTypes.string,
        labelKey: React.PropTypes.string,
        valueKey: React.PropTypes.string
    },
    _ariaGetListId() {
        return this.state.controlId + '_list';
    },
    getDefaultProps() {
        return {
            items: [],
            initialValues: [],
            onChange: function() {},
            valueKey: 'value',
            labelKey: 'label',
            hiddenKey: 'hidden',
            clearable: true,
            searchable: false,
            type: 'bootstrap'
        }
    },
    getInitialState() {
        return {
            controlId: _.uniqueId('rss_'),
            options: [],
            selections: [],
            title: this.props.placeholder,
            listOpen: false
        }
    },
    componentWillReceiveProps(newProps) {
        let data = newProps.items.map(function(item){
            let newItem = {};
            newItem[newProps.valueKey] = item[newProps.valueKey];
            newItem[newProps.labelKey] = item[newProps.labelKey];
            newItem[newProps.hiddenKey] = item[newProps.hiddenKey];
            return newItem;
        });
        let selections = newProps.initialValues.map(function(val){
            let index = _.findIndex(data, newProps.valueKey, val[newProps.valueKey]);
            data[index].selected = true;
            return data[index];
        });
        this.setState({options: data, selections: selections});
    },
    valueClicked(option) {
        let index = _.findIndex(this.state.options, this.props.valueKey, option[this.props.valueKey]);
        let selIndex = _.findIndex(this.state.selections, this.props.valueKey, option[this.props.valueKey]);

        let selected = selIndex === -1;
        if ( !selected ) {
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
    renderOption(dataOption, index) {
        var itemKey = "drop_li_" + dataOption[this.props.valueKey],
            indexRef = 'option_' + index,
            ariaDescendantId = this.state.controlId + '_aria_' + indexRef,
            classes = classNames('r-ss-dropdown-option', {
                'r-ss-selected': dataOption.selected
            });
        if ( dataOption[this.props.hiddenKey] ) {
            classes += ' hidden-li';
        }

        return (
            <li ref={indexRef}
                id={ariaDescendantId}
                tabIndex="0"
                data-option-index={index}
                className={classes}
                aria-selected={dataOption.selected}
                key={itemKey}
                data-option-value={dataOption[this.props.valueKey]}
                onClick={this.valueClicked.bind(null, dataOption)}
                role="option">
                {dataOption[this.props.labelKey]}
            </li>);
    },
    buildOptions() {
        let ops = this.state.options.map(this.renderOption);

        return (
            <div ref="dropdownContent" className="r-ss-dropdown" onKeyDown={this._handleKeyDown}>
                <div ref="scrollWrap" className="r-ss-options-wrap">
                    <ul className="r-ss-dropdown-options"
                        ref="dropdownOptionsList"
                        tabIndex="-1"
                        id={this._ariaGetListId()}
                        role="listbox"
                        aria-expanded={this.state.isOpen}>
                        {ops}
                    </ul>
                </div>
            </div>
        );
    },
    toggleList() {
        this.setState({listOpen: !this.state.listOpen});
    },
    clearSelected() {
        var data = this.state.options;
        let i = 0;
        for(i = 0; i < data.length; i++) {
            data[i].selected = false;
        }
        this.setState({selections: [], options: data});
        this.props.onChange(null, []);
    },
    render() {
        if ( this.props.type === 'elemental') {
            return this.render_elemental();
        } else if ( this.props.type === 'bootstrap') {
            return this.render_bootstrap();
        }
        return this.render_bootstrap();
    },
    render_bootstrap() {
        let menu = this.state.listOpen ? this.buildOptions() : null;

        return (
            <div>
                <div className="input-group">
                    <input type="text" 
                            className="form-control"
                            autofocus
                            onChange={this.handleFilterChange}
                            readOnly={true}
                            value={this.state.selections.length + ' selected'}>
                    </input>
                    {
                        (this.props.clearable && this.state.selections.length > 0) ?
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.clearSelected}>
                                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                </button>
                            </span>
                            :
                            null
                    }
                    
                    <span className="input-group-btn">
                        <button className="btn btn-default" onClick={this.toggleList} type="button">
                            <span aria-hidden="true" className={"glyphicon glyphicon-triangle-" + (this.state.listOpen ? 'top' : 'bottom')}></span>
                        </button>
                    </span>
                </div>
                {menu}
            </div>
        );
    },
    render_elemental() {
        let menu = this.state.listOpen ? this.buildOptions() : null;
        return (
            <div>
                <InputGroup contiguous>
                    <InputGroup.Section grow>
                        <FormInput autofocus
                                   onChange={this.handleFilterChange}
                                   readOnly={true}
                                   value={this.state.selections.length + ' selected'}>
                        </FormInput>
                    </InputGroup.Section>
                    {
                        (this.props.clearable && this.state.selections.length > 0) ?
                            <InputGroup.Section>
                                <Button type="hollow-danger" onClick={this.clearSelected}><Glyph icon='circle-slash'/></Button>
                            </InputGroup.Section>
                            :
                            null
                    }
                    <InputGroup.Section>
                        <Button onClick={this.toggleList}><Glyph icon={"triangle-" + (this.state.listOpen ? 'up' : 'down')}/></Button>
                    </InputGroup.Section>
                </InputGroup>
                {menu}
            </div>
        );
    }

});