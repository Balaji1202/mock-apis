<template>
	<div class="header">
		<div class="title">
			Mocked API
		</div>
		<div class="subtitle title">
			A list of APIs consisting of Mocked Data
		</div>
		<div class="documentation">
			<a target="_blank" href="https://twobytwelve.blogspot.com/2020/05/mocked-api-documentation.html">Documentation</a>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style scoped>
	.theme-switcher {
		padding: 10px;
		cursor: pointer;
	}
	.title {
		text-align: center;
	}
	.subtitle {
		font-size: 1.7rem;
	}
	.hamburger {
			display: none
	}
	@media (max-width: 850px) {
		.subtitle{
			display: none
		}
		.hamburger {
			display: block
		}
	}
	.header {
		position: fixed;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 75px;
		font-size: 2.5rem;
		z-index: 100;
		border-bottom: 1px solid black;
		background-color: white;
		opacity: 0.9;
	}
	.documentation {
		cursor: pointer;
	}
	.documentation a {
		text-decoration: underline;
		color: black;
		font-size: 1.2rem;
	}
	img {
		cursor: pointer;
	}
</style>