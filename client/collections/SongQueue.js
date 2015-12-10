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

  	this.on('enqueue', function(item) {
      //item.attributes lets us add same song
        //multiple times
  		// this.add(item.attributes);
      this.add(item.attributes);
  	}, this);

  	this.on('erase', function(item) {
  		this.remove(item);
  	}, this);
  },

  playFirst: function() {
  	this.at(0).play();
  }

});