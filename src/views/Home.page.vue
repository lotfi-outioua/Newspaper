<template>
	<div>
		<the-header activeLink="home"></the-header>
		<div class="container py-5">
			<Article v-for="(article, index) of articles" :key="index" :id="index" :post="article"></Article>
			<h2 v-if="totalResults === 0" class="text-muted text-center">No article found</h2>
		</div>
	</div>
</template>

<script>
	import Api from '@/services/Api'
	import TheHeader from '../components/layouts/TheHeader.component.vue'
	import Article from '../components/Article.component.vue'

	export default {
		name: "Home",
		components: {
			TheHeader,
			Article
		},
		data() {
			return {
				totalResults: 0,
				articles: null
			}
		},
		mounted() {
			Api.get(`top-headlines?country=fr`)
			.then(response => {
				if (process.env.VUE_APP_DEBUG === "true") {
					console.log(response);
				}
				if (response.status === 'ok') {
					this.totalResults = response.totalResults;
					this.articles = response.articles;
				}
			})
			.catch(error => {
				if (process.env.VUE_APP_DEBUG === "true") {
					console.log(error);
				}
			});
		}
	}
</script>

<style scoped>

</style>
