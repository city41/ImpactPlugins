# State Machine

A simple state machine for entities, makes managing entities with many behaviors easier

## To Use
Once you require the plugin, mix it into the entity class you want to have state machines

`EntityMyEntity.inject(MixinStateMachine);`

After that, the entity type will gain these functions, configs and properties:

* stateMachine (object): the definition of the entity's state machine (see below)
* setState(state) (function): set the entity to the specified state
* stateIs(state) (function): returns true if the entity is currently in the queried state
* transition(transition) (function): Cause the entity to transition from one state to another


## How to create state machines in entities

Here is an example entity with a state machine

```
EntityEnemy = ig.Entity.extend({
	stateMachine: {
		roam: {
			on: {
				seePlayer: 'beAlerted'
				seeCake: 'eatCake',
				gotAttacked: 'die'
			}
		},
		beAlerted: {
			on: {
				beAlertedCompleted: 'chasePlayer',
				gotAttacked: 'die'
			}
		},
		chasePlayer: {
			on: {
				chaseTimedOut: 'roam',
				gotAttacked: 'die'
			}
		},
		eatCake: {
			on: {
				eatCakeCompleted: 'roam',
				gotAttacked: 'die'
			}
		},
		initialState: 'roam'
	},

	_on_die: function() {
		this.kill();
	},

	_update_roam: function() {
		// roam about the level
	},

	_update_beAlerted: function() {
		// do be alerted animation
		// if the animation finishes
		if(this.currentAnim.loopCount) {
			this.transition('beAlertedCompleted');
		}
	},

	_update_chasePlayer: function() {
		// chase the player!
	},

	_on_eatCake: function() {
		this.health += 1;
	},

	_update_eatCake: function() {
		// eat the cake!
		// when eat cake animation is done
		if(this.currentAnim.loopCount) {
			this.transition('eatCakeCompleted');
		}
	}
});

EntityEnemy.inject(MixinStateMachine);
```

In the above example, the `stateMachine` config defined all the states and transitions. From there the state machine handles the rest. Depending on what state the entity is currently in, the appropriate `_update_[stateName]` method will get called during `update()`. So if the entity is in the **roam** state, then `_update_roam` will get called. Also, whenever a state transition happens, then the `_on_[stateName]` method gets called if it exists.
