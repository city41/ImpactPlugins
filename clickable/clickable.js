ig.module('plugins.clickable').defines(function() {
	var mouseMoveHookedUp = false;
	var clickables = [];

	function anyClickablesInFocus() {
		for(var i = 0;i < clickables.length; ++i) {
			if(clickables[i].inMouseFocus()) {
				return true;
			}
		}
	}

	function onMouseMove() {
		var cursor = anyClickablesInFocus() ? 'pointer' : '';
		ig.system.canvas.style.cursor = cursor;
	}

	MixinClickable = {

		init: function(x, y, settings) {
			this.parent(x, y, settings);
		
			ig.input.initMouse();

			if(!window.wm) {
				ig.system.canvas.addEventListener('click', this._clickable_onCanvasClick.bind(this));
				ig.system.canvas.addEventListener('touchend', this._clickable_onCanvasClick.bind(this));

				if(!mouseMoveHookedUp) {
					ig.system.canvas.addEventListener('mousemove', onMouseMove);
					mouseMoveHookedUp = true;
				}
			}

			clickables.push(this);
		},

		_clickable_onCanvasClick: function() {
			if(this.inMouseFocus() && typeof this.onClick === 'function') {
				this.onClick();
			}
		},

		inMouseFocus: function() {
			return (
				 (this.pos.x <= (ig.input.mouse.x + ig.game.screen.x)) &&
				 ((ig.input.mouse.x + ig.game.screen.x) <= this.pos.x + this.size.x) &&
				 (this.pos.y <= (ig.input.mouse.y + ig.game.screen.y)) &&
				 ((ig.input.mouse.y + ig.game.screen.y) <= this.pos.y + this.size.y)
			);
		}

	};

});

