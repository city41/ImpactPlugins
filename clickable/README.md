# Clickable

Makes an entity clickable by the mouse. The mouse cursor turns into the "hand" pointer and when the entity is clicked on, `onClick` is called.

## To Use

This is a mixin based plugin, you'll need to include the plugin, then mix it into your entity class

```
ig.module('game.entities.my-entity')
.requires('impact.entity', 'plugins.clickable')
.defines(function() {

	EntityMyEntity = ig.Entity.extend({
		size: {
			x: 20,
			y: 5
		},

		onClick: function() {
			// do something in response to click
		}

		// ...
	});

	EntityMyEntity.inject(MixinClickable);
});
```

