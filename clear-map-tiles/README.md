# Clear Map Tiles

Lets you clear out a position on a background map, whether it is prerendered or not. 

Before I made this plugin, I used to change a background map, then delete its prerendered chunks so the change could take place. This is very expensive, as it forces the entire background to get rerendered again. So this plugin does a little bit of spot surgery, and removes the tile from the position you specify

## To Use

Once you require this plugin, all `BackgroundMap`s will gain a `clearTileAt(pos)` function, where `pos` is an object with `x` and `y` properties. The portion of
the map specified at `x` and `y` will get its tile value set to zero, and the tile image that is drawn there will be removed.

```
// inside an ig.Game ...
this.getMapByName('platforms').clearTileAt({
	x: 4,
	y: 6
});

// now the tile at (4,6) has been erased
```

## Why?

I use this plugin a lot in my game [Dragon Plunder](http://www.indiedb.com/games/dragon-plunder), where the platforms in the game crumble and fall away
as the cavern caves in. This plugin allows me to define the platforms as part of the background/collision maps, and still delete them efficiently.


