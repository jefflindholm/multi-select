var _ = require('lodash');
var React = require('react');

var Button = require('elemental/lib/components/Button');
var Form = require('elemental/lib/components/Form');
var FormField = require('elemental/lib/components/FormField');
var FormInput = require('elemental/lib/components/FormInput');
var FormLabel = require('elemental/lib/components/FormLabel');
var FormRow = require('elemental/lib/components/FormRow');
var Glyph = require('elemental/lib/components/Glyph');
var InputGroup = require('elemental/lib/components/InputGroup');

var Dropdown = require('react-dropdown');

module.exports = React.createClass({

    getDefaultProps: function() {
        return {
            items: [],
            placeholder: 'Enter some filter text',
            onChange: function() {},
            onItemSelected: function() {},
            onItemDeselected: function() {}
        }
    },
    getInitialState: function() {
        return {
            options: [],
            selections: [],
            title: this.props.placeholder,
            listOpen: false
        }
    },
    componentWillReceiveProps(newProps) {
        var data = newProps.items.map(function(item){
            let key = 'value' in item ? item.value : item.id;
            let text = 'text' in item ? item.text
                : 'name' in item ? item.name
                : key;
            return { value: key, label: text }
        });
        console.log('data', data);
        this.setState({options: data});
    },
    valueClicked(option) {
        var index = _.findIndex(this.state.options, 'value', option.value);
        var selIndex = _.findIndex(this.state.selections, 'value', option.value);
        var selected = selIndex === -1;
        if ( selIndex !== -1 ) {
            this.state.selections.splice(selIndex, 1);
        } else {
            this.state.selections.push(option);
        }
        this.state.options[index].selected = selected;
        this.setState({
            selections: this.state.selections,
            options: this.state.options
        });
    },
    renderOption(option) {
        var classNames = 'Dropdown-option ' + (option.selected ? 'is-selected' : '');
        return (
            <div
                key={option.value}
                className={classNames}
                onClick={this.valueClicked.bind(this, option)}
                >
                {option.label}
            </div>
        )
    },
    buildMenu() {
        let ops = this.state.options.map((option) => {
            if ( option.type === 'group' ) {
                return (<div className="title" key={option.value}>{option.label}</div>);
            } else {
                return this.renderOption(option);
            }
        });
        return ops.length ? (<div>{ops}</div>) : null;
    },
    toggleList() {
        this.setState({listOpen: !this.state.listOpen});
        console.log('state', this.state);
    },
    render: function() {
        let menu = this.state.listOpen ? this.buildMenu() : null;
        return (
            <div>
                <InputGroup contiguous>
                    <InputGroup.Section grow>
                        <FormInput autofocus placeholder={this.props.placeholder} onChange={this.handleFilterChange}
                                   value={this.state.filter}/>
                    </InputGroup.Section>
                    <InputGroup.Section>
                        <Button onClick={this.toggleList}><Glyph icon="triangle-down"/></Button>
                    </InputGroup.Section>
                </InputGroup>
                {menu}
            </div>
        );
    }
});