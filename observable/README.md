# Observable

Gives entities the ability to fire and listen for events.

This plugin is absolutely essential in my opinion, I wish Impact had this built in.

## To Use

Once you require the plugin, then all Impact classes will gain the ability to fire events and listen for events.

### To Fire an Event

call `fireEvent(eventName, varargs)`

ie

```
ig.module('game.entities.my-entity')
.requires('impact.entity', 'plugins.observable')
.defines(function() {

	EntityMyEntity = ig.Entity.extend({
		update: function() {
			this.parent();

			if(this.somethingCoolHappened()) {
				this.fireEvent('something-cool', this);
			}
		}
	});
});
```

### To listen to Events
then typically the game class listens for events, but anything can be a listener

```
MyGame = ig.Game.extend({

	init: function() {
		this.loadLevel(LevelOne);
		this.myEntity = this.getEntitiesByType(EntityMyEntity)[0];

		this.myEntity.on('something-cool', this.onEntityDidSomethingCool);
	},

	onEntityDidSomethingCool: function(entity) {
		console.log('the entity did something cool');
	}
}
```
		
### And finally, to stop listening

you can stop listening to an event using `un`,

`this.myEntity.un('something-cool', this.onEntityDidSomethingCool);`

You need to pass in the same function you registered the listener with

