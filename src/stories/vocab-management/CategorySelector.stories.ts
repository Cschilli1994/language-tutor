import CategorySelect from "../../lib/vocab-management/CategorySelect.svelte";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Vocab-Management/CategorySelect',
	component: CategorySelect,
	argTypes: {
		backgroundColor: { control: 'color' },
		label: { control: 'text' },
		onClick: { action: 'onClick' },
		primary: { control: 'boolean' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: CategorySelect,
	props: args,
	on: {
		click: args.onClick
	}
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
	phrase: {
		image: 'https://chriskresser.com/wp-content/uploads/raw-milk-1-e1563894986431.jpg',
		original: 'Leite',
		translation: 'Milk'
	},
	onComplete: () => console.log('Show next Card')
};
