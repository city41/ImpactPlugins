ig.module('plugins.state-machine').defines(function() {
	MixinStateMachine = {
		ready: function() {
			this.parent();

			this.setState(this.stateMachine.initialState);
		},

		setState: function(state) {
			this._currentState = state;
			this._currentUpdate = this['_update_' + state];

			if (typeof this['_on_' + state] === 'function') {
				this['_on_' + state]();
			}
		},

		stateIs: function(state) {
			return this._currentState === state;
		},

		transition: function(transition) {
			var stateDefinition = this.stateMachine[this._currentState];

			if (stateDefinition) {
				var transitions = stateDefinition.on;
				if (transitions && transitions[transition]) {
					this.setState(transitions[transition]);
				}
			}
		},

		update: function() {
			if (this._currentUpdate) {
				this._currentUpdate(this.parent);
			} else {
				this.parent();
			}
		}
	};
});


