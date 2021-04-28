import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.page.vue'

describe('Home.page.vue', () => {
	it ('should be display no Article found', async () => {
		const wrapper = shallowMount(Home, {
			data() {
				return {
					totalResults : 0
				}
			}
		})
		expect(wrapper.text()).toContain('No article found');
		await wrapper.setData({ totalResults : 10 });
		expect(wrapper.text()).not.toContain('No article found');
	})
})
