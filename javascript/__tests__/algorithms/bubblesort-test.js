jest.dontMock('../../algorithms/bubble-sort');

describe("A function to sort a list `l' using the " +
		"`bubble-sort' algorithm.", function () {
	it('should sort a given list of comparables', function () {
		var sort = require('../../algorithms/bubble-sort').sort;

		expect(sort([4, 2, 3, 1, 7, 5, 6])).toEqual([
			1
			, 2
			, 3
			, 4
			, 5
			, 6
			, 7
		]);
	});
});
