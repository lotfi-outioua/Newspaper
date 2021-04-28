<template>
	<div class="card mb-4">
		<div class="card-body">
			<h3 :id="'title-' + id">{{ post.title }}</h3>
			<p :id="'description-' + id">{{ post.description }}</p>
			<p :id="'author-' + id">{{ post.author }}</p>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Article',
	props: ['id', 'post']
}

</script>
