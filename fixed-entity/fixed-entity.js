ig.module('plugins.fixed-entity')
.requires('impact.entity')
.defines(function() {
	ig.Entity.inject({
		init: function(x, y, settings) {
			this.parent(x, y, settings);

			if(this.fixed) {
				this.initialPos = ig.copy(this.pos);
				this.zIndex = 999999;
			}
		},

		draw: function() {
			if(this.fixed) {
				this.pos.x = this.initialPos.x + ig.game.screen.x;
				this.pos.y = this.initialPos.y + ig.game.screen.y;
			}
			this.parent();
		}
	});
});

