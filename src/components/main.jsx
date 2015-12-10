var React = require('react');

var Header = require('./header');

module.exports = React.createClass({
    content: function() {
        if ( this.props.children) {
            return this.props.children;
        } else {
            return (
                <div></div>
            )
        }
    },
    render: function() {
        return (
            <div>
                <Header />
                {this.content()}
            </div>
        )
    }
});