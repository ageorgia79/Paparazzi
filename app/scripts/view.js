'use strict';

Parse.initialize("UP7trL9erMamnZfXjIhkcfvjg77gL4mTtXEy6GQ8", "ljgFzXhT0pMkDbBEuLwA7o5LjqD6hHT4TcI6ig5H");

var Paparazzi = Parse.Object.extend({

  className: "Paparazzi"
});

var MainCollection = Parse.Collection.extend({

  model: Paparazzi,
});

var collection = new MainCollection();

var MainView = Parse.View.extend({

  className: 'cool',

  mainTemplate: _.template($('.main-template').text()),

  events: {

  },

  initialize: function(){
    $('.container1').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.mainTemplate();
    this.$el.html(renderedTemplate);
  },


});

var main = new MainView();