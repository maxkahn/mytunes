var CurrentSongView = Backbone.View.extend({

	tagName: 'span',

	template: _.template('<span class="label">Current Song: </span><span class="artist">(<%= artist %>)&nbsp;</span><span class="title"><%= title %></span>'),

	initialize: function() {
		this.render();
	},

	//click event to stop playing,
	//load next song?

	setSong: function(song) {
    this.model = song;
    this.render();
  },

	render: function() {
		var holder = this.model.get('title') ? this.template(this.model.attributes) : '<span class="label">Current Song: </span><span>[no song loaded]</span>';
		return this.$el.html(holder);
	}

});
