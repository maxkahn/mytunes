// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.currentSongView = new CurrentSongView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
      this.currentSongView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function() {
    // maybe add a class to this?
    var $wrapperPlayer = $('<div class="player"></div>')
    $wrapperPlayer.html([this.currentSongView.$el, this.playerView.$el]);
    var $wrapperQueue = $('<div></div>');
    $wrapperQueue.html([this.libraryView.$el, this.songQueueView.$el]);
    return this.$el.html([
      $wrapperPlayer,
      $wrapperQueue
    ]).addClass('app');
  }

});
