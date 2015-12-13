var _ = require('lodash');
var React = require('react');

import MultiList from './multi-select';
 
module.exports = {
    handleChange(item, selected) {
        this.props.onChange(selected);
    },
    onDataChange(event, data) {
        this.setState({data: data.map(function(d){return {id: d.id, text: d.name, org: d}})});
    },
    getInitialState: function() {
        return { data: [], selected: [] }
    },
    getDefaultProps() {
        return {
            onChange: function() {}
        }
    },
    render() {
        var data = _.sortBy(this.filter(), 'text');
        return (
            <MultiList type={this.props.type} initialValues={this.props.values} items={data} valueKey='id' labelKey='text' onChange={this.handleChange} />
        );
    }
};
