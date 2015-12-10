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


var BusinessNameSearch = require('./controls/business-name-search');
var MarketMs = require('./controls/market-ms');
var RegionMs = require('./controls/region-ms');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            regions: [],
            markets: []
        };
    },
    regionsChanged: function(regions) {
        this.setState({regions: regions});
    },
    marketsChanged: function(markets) {
        this.setState({markets: markets});
    },
    render: function () {
            var labelStyle1 = {
                width: '130px',
                textAlign: 'right',
                paddingRight: '7px'
            };
            var labelStyle2 = _.merge({}, labelStyle1, {width:'90px'});
            var labelStyle3 = _.merge({}, labelStyle1, {width:'117px'});

            return (
                <Row>
                    <Col sm="1/3">
                        <Form type="horizontal">
                            <FormField>
                                <FormLabel style={labelStyle1}>Business No</FormLabel>
                                <BusinessNameSearch />
                            </FormField>
                            <FormField>
                                <FormLabel style={labelStyle1}>Stock No</FormLabel>
                                <FormInput type="text" placeholder="Stock Number"/>
                            </FormField>
                            <FormField>
                                <FormLabel style={labelStyle1}>Floorplan Status</FormLabel>
                                <FormInput type="text" placeholder="Floorplan Status"/>
                            </FormField>
                        </Form>
                    </Col>
                    <Col sm="1/3">
                        <Form type="horizontal">
                            <FormField>
                                <FormLabel style={labelStyle2}>Vin</FormLabel>
                                <FormInput type="text" placeholder="Vin"/>
                            </FormField>
                            <FormField>
                                <FormLabel style={labelStyle2}>Title Type</FormLabel>
                                <FormInput type="text" placeholder="Title Type"/>
                            </FormField>
                        </Form>
                    </Col>
                    <Col sm="1/3">
                        <Form type="horizontal">
                            <FormField>
                                <FormLabel style={labelStyle3}>Region</FormLabel>
                                <RegionMs onSelectedChanged={this.regionsChanged}/>
                            </FormField>
                            <FormField>
                                <FormLabel style={labelStyle3}>Market</FormLabel>
                                <MarketMs onSelectedChanged={this.marketsChanged} regions={this.state.regions}/>
                            </FormField>
                        </Form>
                    </Col>
                </Row>
        );
    }
});