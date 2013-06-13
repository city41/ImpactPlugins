# Fixed Entity

Fixes an entity to the screen if its `fixed` property is set to true. Good for HUDs and things that need to stay in place regardless of what `ig.game.screen` is up to.

## To Use

Once you require this plugin it gets injected into `ig.Entity`, and all entities can become fixed by setting `fixed` to true.  
  
`fixed` needs to be set during `init()` in order for this plugin to work properly, weltmeister is the best place to set `fixed`

