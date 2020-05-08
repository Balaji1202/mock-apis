<template>
  <div class="info">
	<ul v-for="(item, index) in api" :key="index">
		<li>
			<a :href="item.href" target="_blank">{{item.display}}</a>
		</li>
	</ul>
		<div class="info-footer">
			<p>
				Are you ready to play with these thousands of mocked data. Hit the <a href="https://twobytwelve.blogspot.com/2020/05/mocked-api-documentation.html">documentation</a> page, and get started
			</p>
		</div>
	</div>
</template>

<script>
export default {
  data() {
		return {
			api: [{
				href: 'api/personal',
				display: 'Personal Information API'
			},
			{
				href: 'api/movies',
				display: 'Movie data API'
			},
			{
				href: 'api/stockmarket',
				display: 'Stock market Information API'
			}]
			
		}
	},
}
</script>

<style scoped>
.info {
	width: auto;
	display: flex;
	justify-content: center;
	text-align: center;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 15rem 0 0 0;
}
.info a {
	text-decoration: underline;
	color: black;
	font-size: 2rem;
	text-align: center;
}
.info li {
	list-style-position: inside;
}
.info-footer {
	padding: 3rem;
	padding-top: 5rem;
	font-size: 2rem;
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>