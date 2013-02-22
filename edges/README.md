# Edges

Adds properties to an entity for its top, left, right and bottom edges. Since it's using `Object.defineProperty`, the value for these properties is always up to date.

## To Use

This is a mixin based plugin, you'll need to include the plugin, then mix it into your entity class

```
ig.module('game.entities.my-entity')
.requires('impact.entity', 'plugins.edges')
.defines(function() {

	EntityMyEntity = ig.Entity.extend({
		size: {
			x: 20,
			y: 5
		},
		// ...
	});

	EntityMyEntity.inject(MixinEdges);
});
```

Then, to use:

```
var entity = ig.game.spawnEntity(EntityMyEntity, 10, 40);

entity.left; // returns 10
entity.right; // returns 30
entity.top;  // returns 40
entity.bottom; // returns 45





