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
var DealerStatusMs = require('./controls/dealer-status-ms');
var MarketMs = require('./controls/market-ms');
var RegionMs = require('./controls/region-ms');
var StateMs = require('./controls/state-ms');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            states: [],
            countries: [],
            regions: [],
            markets: [],
            buyerStatuses: [],
            sellerStatuses: [],
            quickBuyer: null
        };
    },
    countryChanged: function(countries) {
        this.setState({countries: countries});
    },
    quickBuyerChanged: function(option) {
        this.setState({quickBuyer:option});
    },
    regionsChanged: function(regions) {
        this.setState({regions: regions});
    },
    marketsChanged: function(markets) {
        this.setState({markets: markets});
    },
    buyerStatusesChanged: function (statuses) {
        this.setState({buyerStatuses: statuses});
    },
    sellerStatusesChanged: function(statuses) {
        this.setState({sellerStatuses: statuses});
    },
    render: function () {
        var labelStyle1 = {
            width: '100px',
            textAlign: 'right',
            paddingRight: '7px'
        };
        var labelStyle2 = _.merge({}, labelStyle1, {width:'90px'});
        var labelStyle3 = _.merge({}, labelStyle1, {width:'117px'});
        var labelStyle4 = _.merge({}, labelStyle1, {});

        return (
            <Row>
                <Col sm="1/4">
                    <Form type="horizontal">
                        <FormField>
                            <FormLabel style={labelStyle1}>Business No</FormLabel>
                            <FormInput type="text" placeholder="Business Number"/>
                        </FormField>
                        <FormField>
                            <FormLabel style={labelStyle1}>Name</FormLabel>
                            <FormInput type="text" placeholder="Business Name"/>
                        </FormField>
                        <FormField>
                            <FormLabel style={labelStyle1}>Contact</FormLabel>
                            <FormInput type="text" placeholder="Contact Name"/>
                        </FormField>
                        <FormField>
                            <FormLabel style={labelStyle1}>Phone</FormLabel>
                            <FormInput type="text" placeholder="Phone"/>
                        </FormField>
                    </Form>
                </Col>
                <Col sm="1/4">
                    <Form type="horizontal">
                        <FormField>
                            <FormLabel style={labelStyle2} >Country</FormLabel>
                            <CountryMs onSelectedChanged={this.countryChanged}/>
                        </FormField>
                        <FormField>
                            <FormLabel style={labelStyle2}>City</FormLabel>
                            <FormInput type="text" placeholder="City"/>
                        </FormField>
                        <FormField>
                            <FormLabel style={labelStyle2}>State</FormLabel>
                            <StateMs onSelectedChanged={this.stateChanged} countries={this.state.countries}/>
                        </FormField>
                        <FormField>
                            <FormLabel style={labelStyle2}>Zip</FormLabel>
                            <FormInput type="text" placeholder="Zip"/>
                        </FormField>
                    </Form>
                </Col>
                <Col sm="1/4">
                    <Form type="horizontal">
                        <FormField>
                            <FormLabel style={labelStyle3}>Region</FormLabel>
                            <RegionMs onSelectedChanged={this.regionsChanged}/>
                        </FormField>
                        <FormField>
                            <FormLabel style={labelStyle3}>Market</FormLabel>
                            <MarketMs onSelectedChanged={this.marketsChanged} regions={this.state.regions}/>
                        </FormField>
                        <FormField>
                            <FormLabel style={labelStyle3}>Auction Access</FormLabel>
                            <FormInput type="text" placeholder="Auction Access"/>
                        </FormField>
                    </Form>
                </Col>
                <Col sm="1/4">
                    <Form type="horizontal">
                        <FormField>
                            <FormLabel style={labelStyle4}>Buyer Status</FormLabel>
                            <DealerStatusMs onSelectedChanged={this.buyerStatusesChanged}/>
                        </FormField>
                        <FormField>
                            <FormLabel style={labelStyle4}>Seller Status</FormLabel>
                            <DealerStatusMs onSelectedChanged={this.sellerStatusesChanged}/>
                        </FormField>
                        <FormField>
                            <FormLabel style={labelStyle4}>Quick Buyer</FormLabel>
                            <FormSelect type="text"
                                        firstOption="Select..."
                                        placeholder="Quick Buyer"
                                        onChange={this.quickBuyerChanged}
                                        options={[{value:'1', label:'yes'}, {value:'0', label:'no'}]}/>
                        </FormField>
                    </Form>
                </Col>

            </Row>
        );
    }
});