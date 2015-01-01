// router-current-url.meteor.com

Router.configure({
    layoutTemplate: 'defaultLayout',
});

Router.route('/', {
    template: 'home'
});

Router.route('/myroute', {
    template: 'myroute'
});

if (Meteor.isClient) {
    Template.registerHelper('currentUrl', function() {
        console.log('Router.current().url=' + Router.current().url);
        return Router.current().url;
    });
}