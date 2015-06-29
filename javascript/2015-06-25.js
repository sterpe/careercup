/**
 *
 * Write a function to print a tree, which can have any number of nodes,
 * in level order, each level on a new line.  E.g.,
 * If the tree is :
 * 		1
 * 		2 3
 * 		4 5 6
 * then the answer should be:
 * 	1\n
 * 	2,3\n
 * 	4,5,6\n
 */

exports.Node = function (value, children) {
	this.value = value;
	this.child = [];
	for (var i = 0; i < children.length; i++) {
		this.child.push(children[i]);
	}
};
exports.printTree = function (rootNode) {
	var Q = [];
	Q.enqueue = Q.unshift;
	Q.dequeue = Q.pop;

	rootNode.visited = true;
	rootNode.level = 0;
	Q.enqueue(rootNode);
	
	var currLevel = 0;
	var s  = "";
	while (Q.length) {
		var p = Q.dequeue();
		if (p.level === currLevel) {
			s += p.value;
		}
		if (p.level === currLevel + 1) {
			s += '\n';
			s += p.value;
			currLevel++;
		}
		if (Q.length && Q[Q.length - 1].level === p.level) {
			s += ',';
		}
		for (var i = 0; i < p.child.length; ++i) {
			if (!p.child[i].visited) {
				p.child[i].visited = true;
				p.child[i].level = p.level + 1;
				Q.enqueue(p.child[i]);
			}
		}
	}
	return s;
};

/**
 *
 * Convert a string to its permutated string using only adjacent swapping.
 * E.g.,
 *	CAT => ACT, ATC, CAT, CTA, TAC, TCA
 */

exports.permutate = function (s) {
	var sort = require('./algorithms/bubble-sort').sort;
	var permutations = [];
	var i, j, k;
	var tmp;

	if (typeof s === 'string') {
		s = s.split("");
	}

	// Use a `bubble sort'...
	s = sort(s);

	permutations.push(s.join(""));

	while (1) {
		k = s.length - 2;
		for (k; k > -1; --k) {
			if (s[k] < s[k + 1]) {
				break;
			}
		}

		if (k === -1) {
			return permutations;
		}

		l = s.length - 1;
		for (l; l > k; --l) {
			if (s[k] < s[l]) {
				break;
			}
		}

		// Equivalent to ...
		// tmp = s[l];
		// s[l] = s[k];
		// s[k] = tmp;

		for (i = k; i < l; ++i) {
			tmp = s[i];
			s[i] = s[i + 1];
			s[i + 1] = tmp;
		}
		for (i = l - 1; i > k; --i) {
			tmp = s[i];
			s[i] = s[i - 1];
			s[i - 1] = tmp;
		}

		// Equivalent to ...
		// var chunk = s.slice(k + 1).reverse();
		// s.splice(k + 1, s.length);
		// s.concat(chunk);

		for (j = k + 1; j < s.length - 1; ++j) {
			for (i = k + 1; i < s.length - (1 + j - (k + 1)); ++i) {
				tmp = s[i];
				s[i] = s[i + 1];
				s[i + 1] = tmp;
			}
		}
		permutations.push(s.join(""));
	}
};
