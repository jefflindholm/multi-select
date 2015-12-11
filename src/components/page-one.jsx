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

module.exports = React.createClass({
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
                            <FormLabel style={labelStyle1}>Owner No</FormLabel>
                            <FormInput type="text" placeholder="Owner Number"/>
                        </FormField>
                        <FormField>
                            <FormLabel style={labelStyle1}>State</FormLabel>
                            <CountryMs />
                        </FormField>
                        <FormField>
                            <FormLabel style={labelStyle1}>Contact</FormLabel>
                            <FormInput type="text" placeholder="Contact Name"/>
                        </FormField>
                    </Form>
                </Col>
            </Row>
        );
    }
});