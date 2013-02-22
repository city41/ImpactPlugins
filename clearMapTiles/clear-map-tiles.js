ig.module('plugins.clear-map-tiles')
.requires('impact.background-map')
.defines(function() {

	MixinClearMapTiles = {
		clearTileAt: function(pos) {
			this.data[pos.y][pos.x] = 0;

			if(!this.preRender) {
				// non prerendered maps automatically clear a tile
				// visually next time they paint
				return;
			}

			var px = pos.x * this.tilesize * ig.system.scale;
			var py = pos.y * this.tilesize * ig.system.scale;

			var chunkXi = (px / this.chunkSize) | 0;
			var chunkYi = (py / this.chunkSize) | 0;

			var chunkPixelX = px % this.chunkSize;
			var chunkPixelY = py % this.chunkSize;

			var chunk = this.preRenderedChunks[chunkYi][chunkXi];

			var context = chunk.getContext('2d');

			context.clearRect(chunkPixelX, chunkPixelY, this.tilesize * ig.system.scale, this.tilesize * ig.system.scale);
		}
	};

	ig.BackgroundMap.inject(MixinClearMapTiles);
});





