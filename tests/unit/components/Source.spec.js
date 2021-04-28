import { mount } from '@vue/test-utils'
import Source from '@/components/Source.component.vue'

const source = {
	id: "abc-news",
	name: "ABC News",
	description: "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
	url: "https://abcnews.go.com",
	category: "general",
	language: "en",
	country: "us"
};

describe('Source', () => {
	it('should display name', () => {
		const wrapper = mount(Source, { props: { source } });
		expect(wrapper.find('[data-test="name"]').text()).toBe(source.name);
	})

	it('should display description', () => {
		const wrapper = mount(Source, { props: { source } });
		expect(wrapper.find('[data-test="description"]').text()).toBe(source.description);
	})

	it('should display category', () => {
		const wrapper = mount(Source, { props: { source } });
		expect(wrapper.find('[data-test="category"]').text()).toBe('Catégorie : ' + source.category);
	})
})