import { shallowMount } from '@vue/test-utils'
import Article from '@/components/Article.component.vue'

const post = {
	title: 'shnit',
	author: 'Nitete',
	description: 'lorem ipsum dolor sit amet'
};

describe('Article.vue', () => {
	it('should display title when props are passed', () => {
		const wrapper = shallowMount(Article, { props: { post, id: 0 } })
		const title = wrapper.get('#title-0');
		expect(title.text()).toBe(post.title);
	})

	it('should display author when props are passed', () => {
		const wrapper = shallowMount(Article, { props: { post, id: 0 } })
		const author = wrapper.get('#author-0');
		expect(author.text()).toBe(post.author);
	})

	it('should display description when props are passed', () => {
		const wrapper = shallowMount(Article, { props: { post, id: 0 } })
		const description = wrapper.get('#description-0');
		expect(description.text()).toBe(post.description);
	})
})
