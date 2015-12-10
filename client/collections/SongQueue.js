// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  	this.on('add', function() {
  		if (this.at(1) === undefined) {
  			this.playFirst();
  		}
  	}, this);

  	this.on('ended', function() {
  		this.shift();
  		if (this.at(0) !== undefined) {
  			this.playFirst();
  		}
  	}, this);

  	this.on('dequeue', function() {
  		this.shift();
  		 if (this.at(0) !== undefined) {
  			this.playFirst();
  		}
  	}, this);
  },

  playFirst: function() {
  	this.at(0).play();
  }

});