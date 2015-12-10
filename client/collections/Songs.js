// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  // initialize: function() {
  // 	this.on('ended', function() {
  // 		this.set('playCount', this.get('playCount') + 1);
  // 	}, this);
  // }

});