ig.module('plugins.edges').defines(function() {
	MixinEdges = {
		init: function(x, y, settings) {
			this.parent(x, y, settings);

			Object.defineProperties(this, {
				left: {
					get: function() {
						return this.pos.x;
					}
				},
				right: {
					get: function() {
						return this.pos.x + this.size.x;
					}
				},
				top: {
					get: function() {
						return this.pos.y;
					}
				},
				bottom: {
					get: function() {
						return this.pos.y + this.size.y;
					}
				}
			});
		}
	};
});

