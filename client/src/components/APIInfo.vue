<template>
  <div class="info">
	<ul>
		<li>
			<a href="api/personalInfo" target="_blank">Personal Information API</a>
		</li>
		<li>
			<a href="api/movies" target="_blank">Movie data API</a>
		</li>
		<li>
			<a href="http://127.0.0.1:5000/api/personalinfo" target="_blank">Stock market Information API</a>
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
	margin: 200px 0 0 0;
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
	font-size: 2rem;
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>