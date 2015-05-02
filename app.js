var App = new Marionette.Application();

var RootView = Marionette.LayoutView.extend({
  el: 'body',
  regions: {
    mainRegion: '#main'
  }
});

App.on('start', function() {
  App.rootView = new RootView();
});

$(function() {
  App.start();
});
