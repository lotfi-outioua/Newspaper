<template>
	<the-header activeLink="sources"></the-header>
	<div class="container py-5">
		<Source v-for="(source, index) of sources" :key="index" :source="source" />
	</div>
</template>

<script>
import TheHeader from '../components/layouts/TheHeader.component.vue'
import Source from '../components/Source.component.vue'
import Api from '@/services/Api.js'

export default {
	data() {
		return {
			sources: null,
		}
	},
	components: {
		TheHeader,
		Source
	},
	mounted() {
		Api.getSource()
		.then(response => {
			if (process.env.VUE_APP_DEBUG === "true") {
				console.log(response);
			}
			if (response.status === 'ok') {
				this.sources = response.sources;
				console.log(this.sources);
			}
		})
		.catch(error => {
			if (process.env.VUE_APP_DEBUG === 'true') {
				console.log(error);
			}
		})
	}
}

</script>