# Fade Entity

Makes an entity fade into the game, and optionally fade out at a later point. The fading is always linear.

## To Use

This is a mixin based plugin, you'll need to include the plugin, then mix it into your entity class

Once mixed in, entities use the plugin by specifying several properties. Typically these are set as config properties on the class definition or in Weltmeister:

* `fadeInDuration`: how long to take the entity to fade in from 0->1 alpha, in seconds
* 'solidDuration: how long for the entity to stay fully opaque, in seconds
* 'fadeOutDuration': how long for the entity to fade out, once `solidDuration` has elapsed, in seconds
* `killAfterfadeOut`: if set to a truthy value, the entity's `kill()` will be called after fading out

## setFadeOut() method

There is also a public method added to the entity, `setFadeOut(duration)`. This allows you to create an entity that fades in and hangs out opaque for 
an unknown amount of time. Then when you are ready, call `entity.setFadeOut(duration)` to cause the entity to fade away in `duration` seconds.

## Examples

Define an entity that takes 2 seconds to fade in
```
EntityFadesIn = ig.Entity.extend({
	fadeInDuration: 2,
	// ...
});
EntityFadesIn.inject(MixinFadeEntity);
```

Define an entity that fades in for 1 second, hangs around fully opaque for 5 seconds, then fades out in 4 seconds

```
EntityFadesInAndOut = ig.Entity.extend({
	fadeInDuration: 1,
	solidDuration: 5,
	fadeOutDuration: 4,
	// ...
});
EntityFadesInAndOut.inject(MixinFadeEntity);
```

