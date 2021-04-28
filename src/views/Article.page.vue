<template>
	<the-header></the-header>
	<div class="container py-5" v-if="isReady">
		<h1>Articles of {{ title }}</h1>
		<Article v-for="(article, index) of articles" :key="index" :post="article"></Article>
	</div>
</template>

<script>
	import Api from '@/services/Api.js'
	import TheHeader from '@/components/layouts/TheHeader.component.vue'
	import Article from '@/components/Article.component.vue'

	export default {
		data() {
			return {
				isReady : false,
				articles: null,
				title: null
			}
		},
		components: {
			TheHeader,
			Article,
		},
		mounted() {
			Api.getArticle(this.$route.params.source)
			.then(response => {
				if (response.status === 'ok') {
					this.articles = response.articles;
					this.title = response.articles[0].source.name;
					this.isReady = true;
				}
			})
		}
	}
</script>