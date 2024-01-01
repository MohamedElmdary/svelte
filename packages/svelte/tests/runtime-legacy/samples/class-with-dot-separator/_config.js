import { test } from '../../test';

export default test({
	get props() {
		return {
			showClassList1: true,
			showClassList2: false
		};
	},

	html: '<div class="c1 c-2 c-[3] c__new-x[v2]"></div>',

	test({ assert, component, target }) {
		component.showClassList1 = false;
		component.showClassList2 = true;

		assert.htmlEqual(
			target.innerHTML,
			`
			<div class="c-4 c-[5]-new ccc"></div>
		`
		);
	}
});
