<template>
	<div class="card mb-4">
		<div class="card-body" @click="navigate()">
			<h3 data-test="name">{{ source.name }}</h3>
			<p data-test="description">{{ source.description }}</p>
			<p data-test="category">Catégorie : {{ source.category }}</p>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Source',
	props: [ 'source' ],
	methods: {
		navigate () {
			this.$router.push(`/source/${this.source.id}`);
		}
	}
}

</script>