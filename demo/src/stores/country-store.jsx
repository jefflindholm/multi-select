var countries = [
    { id: "52144719-7D67-4C46-84C4-CF99B93B4EE5", name: 'Canada'},
    { id: "29EC136A-1416-46ED-93CD-254D0FB0B820", name: 'USA'}

];

var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions],
    triggerChange: function() {
        this.trigger('change', countries);
    },
    getCountries: function() {
        this.triggerChange();
    }
});
