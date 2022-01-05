<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
	::-webkit-scrollbar {
		width: 8px;
		height: 6px;
		border-radius: 15px;
		-webkit-border-radius: 15px;
	}
	::-webkit-scrollbar-track-piece {
		border-radius: 15px;
		-webkit-border-radius: 15px;
	}
	::-webkit-scrollbar-thumb:vertical {
		height: 8px;
		background-color: rgba(68, 68, 68,0.5);
		border-radius: 15px;
		-webkit-border-radius: 15px;
	}
	::-webkit-scrollbar-thumb:horizontal {
		width: 8px;
		background-color: gba(68, 68, 68, 0.5);
		border-radius: 15px;
		-webkit-border-radius: 15px;
	}
	[v-cloak] {
		display: none !important;
	}
</style>
