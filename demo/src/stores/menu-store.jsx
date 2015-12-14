var Reflux = require('reflux');

var Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions],
    triggerChange: function() {
        this.trigger('change', this.menus);
    },
    getMenus: function() {
        this.menus = [
            {name: 'PageOne', id: 1, to: 'page-one'},
            {name: 'PageTwo', id: 2, to: 'page-two'},
            {name: 'PageThree', id: 3, to: 'page-three'}
        ];
        this.triggerChange();
    }
});