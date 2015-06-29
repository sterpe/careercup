exports.sort = function (l) {
	var n = l.length
	, swapped = 1
	, swap
	, i
	;
	
	swap = function (l, i, j) {
		var tmp = l[i];
		l[i] = l[j];
		l[j] = tmp;
	};

	while (swapped) {
		swapped = false;
		for (i = 1; i < n; ++i) {
			if (l[i -1] > l[i]) {
				swap(l, i - 1, i);
				swapped = true;
			}
		}
	}
	return l;
};
