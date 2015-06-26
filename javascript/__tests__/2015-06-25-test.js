jest.dontMock('../2015-06-25');

describe('A function to print a tree in level order, ' +
		'each level on a new line.', function () {
	it('prints each level on its own line', function () {
		var printTree = require('../2015-06-25').printTree
		, Node = require('../2015-06-25').Node
		rootNode = new Node(1, [
			new Node(2, [
				new Node (4, [])
			]),
			new Node(3, [
				new Node(5, []),
				new Node(6, [])
			])
		]);
		expect(printTree(rootNode)).toBe([
			"1",
			"2,3",
			"4,5,6"
		].join("\n"));
	});
});
