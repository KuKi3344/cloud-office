<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
	.lizi{
		position: absolute;
		width:100%;
		height:100%;
		z-index:-1;
		}
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
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
		width: 10px;
		background-color: gba(68, 68, 68, 0.5);
		border-radius: 15px;
		-webkit-border-radius: 15px;
	}
	[v-cloak] {
		display: none !important;
	}
</style>
<script>
	document.title = "LULU office";
</script>