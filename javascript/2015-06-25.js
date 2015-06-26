/**
 * http://www.careercup.com/question?id=5723674717978624
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
 * http://www.careercup.com/question?id=5654826979426304
 *
 * Convert a string to its permutated string using only adjacent swapping.
 * E.g.,
 * 	CAT => CAT, CTA, TCA, TAC
 */

exports.permutate = function (s) {
	return [];
};
