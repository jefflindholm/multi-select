var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');
var DataStore = require('../../stores/state-store');

import MultiList from './multi-select';

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(DataStore, 'onDataChange')
    ],
    onDataChange(event, data) {
        this.setState({data: data.map(function(d){return {id: d.id, text: d.name}})});
    },
    getInitialState() {
        return { data: [], selected: [] }
    },
    componentWillMount() {
        Actions.getStates();
    },
    handleMultiChange(selected) {
        this.setState({selected: selected});
    },
    handleChange(item, selected) {
        console.log('item', item);
        console.log('selected', selected);
        //console.log(this.state.data);
        //var list = this.state.selected;
        //if ( checked ) {
        //    list.push({id:item.context.value});
        //} else {
        //    _.remove(list, 'id', item.context.value);
        //}
        //var data = this.state.data;
        //data[_.findIndex(data, 'value', item.context.value)].selected = checked;
        //
        //if ( this.props.onSelectedChanged !== undefined) {
        //    this.props.onSelectedChanged(list);
        //}
        //this.setState({data: data, selected: list});
    },
    render() {
        var data = _.sortBy(this.state.data, 'label');
        return (
            <MultiList items={data} valueKey='id' labelKey='text' onChange={this.handleChange} />
        );
    }
});