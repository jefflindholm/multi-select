var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;

var Actions = require('../actions');
var Menus = require('../stores/menu-store');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(Menus, 'onChange')
    ],
    onChange: function(event, menus) {
        this.setState({menus: menus});
    },
    getInitialState: function() {
        return { menus: [] }
    },
    componentWillMount: function() {
        Actions.getMenus();
    },
    renderTopics: function() {
        return this.state.menus.map(function(menu){
            return (
                <li key={menu.id}>
                    <Link activeClassName="active" to={menu.to}>
                        {menu.name}
                    </Link>
                </li>
            )
        });
    },
    render: function() {
        return (
            <nav className="navbar navbar-default header">
                <div className="container-fluid">
                    <ul className="nav navbar-nav navbar-left">
                        <li key={-1}>
                            <Link activeClassName="active" to={'/'}>
                                {'Home'}
                            </Link>
                        </li>
                        {this.renderTopics()}
                    </ul>
                </div>
            </nav>
        )
    }
});