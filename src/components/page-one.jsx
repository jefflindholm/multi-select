var _ = require('lodash');
var React = require('react');

var Button = require('elemental/lib/components/Button');
var Col = require('elemental/lib/components/Col');
var Form = require('elemental/lib/components/Form');
var FormField = require('elemental/lib/components/FormField');
var FormInput = require('elemental/lib/components/FormInput');
var FormLabel = require('elemental/lib/components/FormLabel');
var FormSelect = require('elemental/lib/components/FormSelect');
var InputGroup = require('elemental/lib/components/InputGroup');
var Row = require('elemental/lib/components/Row');

var CountryMs = require('./controls/country-ms');
var StateMs = require('./controls/state-ms');
var RegionMs = require('./controls/region-ms');
var MarketMs = require('./controls/market-ms');

module.exports = React.createClass({
    getInitialState() {
        return {
            countries: [],
            states: [],
            regions: [],
            markets: []
        }
    },
    countriesChanged(selected) {
        console.log('countriesChanged', selected);
        this.setState({countries: selected})
    },
    statesChanged(selected) {
        this.setState({states: selected})
    },
    regionsChanged(selected) {
        console.log('regionsChanged', selected);
        this.setState({regions: selected});
    },
    marketsChanged(selected) {
        this.setState({markets: selected});
    },
    render: function () {
        var labelStyle1 = {
            width: '100px',
            textAlign: 'right',
            paddingRight: '7px'
        };
        return (
            <Row>
                <Col sm="1/4">
                    <Form type="horizontal">
                        <FormField>
                            <FormLabel style={labelStyle1}>Country</FormLabel>
                            <CountryMs type='elemental' values={this.state.countries} onChange={this.countriesChanged}/>
                        </FormField>
                        <FormField>
                            <FormLabel style={labelStyle1}>State</FormLabel>
                            <StateMs type='elemental' values={this.state.states} countries={this.state.countries} onChange={this.statesChanged}/>
                        </FormField>
                    </Form>
                </Col>
            </Row>
        );
        //<FormField>
        //    <FormLabel style={labelStyle1}>Region</FormLabel>
        //    <RegionMs type='elemental' values={this.state.regions} onChange={this.regionsChanged}/>
        //</FormField>
        //<FormField>
        //<FormLabel style={labelStyle1}>Market</FormLabel>
        //    <MarketMs type='elemental' values={this.state.markets} regions={this.state.regions} onChange={this.marketsChanged}/>
        //</FormField>
    }
});