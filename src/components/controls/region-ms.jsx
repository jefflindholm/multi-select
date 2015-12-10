var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var MultiSelect = require('react-bootstrap-multiselect');
var Actions = require('../../actions');
var RegionStore = require('../../stores/region-store');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(RegionStore, 'onDataChange')
    ],
    onDataChange: function(event, data) {
        this.setState({data: data.map(function(d){return {value: d.id, label: d.name}})});
    },
    getInitialState: function() {
        return { data: [], selected: [] }
    },
    componentWillMount: function() {
        Actions.getRegions();
    },
    handleChange: function(item, checked) {
        var list = this.state.selected;
        if ( checked ) {
            list.push({id:item.context.value});
        } else {
            _.remove(list, 'id', item.context.value);
        }
        var data = this.state.data;
        data[_.findIndex(data, 'value', item.context.value)].selected = checked;

        if ( this.props.onSelectedChanged !== undefined) {
            this.props.onSelectedChanged(list);
        }
        this.setState({data: data, selected: list});
    },
    render: function () {
        var data = _.sortBy(this.state.data, 'label');
        return (
            <MultiSelect multiple data={data} onChange={this.handleChange} />
        );
    }
});