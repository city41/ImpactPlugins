# My Impact Plugins

I have written a lot of plugins for Impact. If some functionality is at all general or usable more than once, I try to capture it in a plugin. So I've written a fair number by now. I'm going to gradually clean them up and post there here. I'm starting out with my simplest plugins.

## One plugin per directory
Each plugin will have its own directory and a README explaining what the plugin does and how to use it.

## Mixin type plugins

I often find I don't want to force a plugin into all entities in my game, so I usually opt to make my plugins as mixins. Then you can mix the plugin's functionality into any type you want. So most of my plugins follow this pattern:

```
ig.module('game.entities.my-entity')
// require the plugin
.requires('impact.entity', 'plugins.edges')
.defines(function() {

	EntityMyEntity = ig.Entity.extend({
		size: {
			x: 20,
			y: 5
		},
		// ...
	});

	// the plugin doesn't do anything unless you inject it into your type
	EntityMyEntity.inject(MixinEdges);
});
```

Not all of my plugins are mixins, check each plugin's README for details.


## Plugins overview

* **clear-map-tiles**: deletes the tile at the specified location in a map
* **clickable**: makes an entity clickable by the mouse, much like a hyperlink
* **edges**: adds `top`, `bottom`, `left` and `right` properties to an entity
* **fixed-entity**: Fixes an entity to the screen, ideal for HUDs
* **observable**: gives all Impact classes the ability to fire and listen to events
* **state-machine**: gives entities state machines, to better manage them

