<template>
  <div id="app">
    <BaseHeader/>
		<div class="container">
			<APIInfo/>
			<BaseFooter/>
		</div>
  </div>
</template>

<script>
import APIInfo from './components/APIInfo.vue';
import BaseHeader from './components/BaseHeader.vue';
import BaseFooter from './components/BaseFooter.vue';

export default {
  name: 'App',
  components: {
    APIInfo,
		BaseHeader,
		BaseFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	position: fixed;
	overflow: auto;
}
</style>
