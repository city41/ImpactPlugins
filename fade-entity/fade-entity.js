ig.module('plugins.fade-entity')
.defines(function() {

	MixinFadeEntity = {
		init: function(x, y, settings) {
			this.parent(x, y, settings);

			this.fadeInTimer = new ig.Timer(this.fadeInDuration || 0);
		},

		draw: function() {
			var originalAlpha = ig.system.context.globalAlpha;
			ig.system.context.globalAlpha = this._fadeInEntity_getAlpha();
			this.parent();
			ig.system.context.globalAlpha = originalAlpha;
		},

		setFadeOut: function(duration) {
			if(this.solidDurationTimer) {
				this.solidDurationTimer.set(0);
			} else {
				this.solidDurationTimer = new ig.Timer(0);
			}
			this.fadeOutTimer = new ig.Timer(duration);
			this.fadeOutDuration = duration;
		},

		_fadeInEntity_getAlpha: function() {
			if(this.fadeInTimer.delta() < 0) {
				return 1 - Math.abs(this.fadeInTimer.delta() / this.fadeInDuration);
			} else if(!this.solidDurationTimer) {
				this.solidDurationTimer = new ig.Timer(typeof this.solidDuration === 'undefined' ? Infinity : this.solidDuration);
			}

			if(this.solidDurationTimer.delta() < 0) {
				return 1;
			} else if(!this.fadeOutTimer) {
				this.fadeOutTimer = new ig.Timer(typeof this.fadeOutDuration === 'undefined' ? 0 : this.fadeOutDuration);
			}

			if(this.fadeOutTimer.delta() < 0) {
				return Math.abs(this.fadeOutTimer.delta() / this.fadeOutDuration);
			} 
			
			if(this.killAfterFadeOut) {
				this.kill();
			}
			return 0;
		}
	};
});


