const Node = require('./node');

class MaxHeap {
	constructor() {
		this.parentNodes=[];
		this.root=null;
		this.args=[];
	}

	push(data, priority) {
		const node=new Node(data, priority);
		this.args.push(node);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		if(this.root==null) {
			this.root=node;
			console.log(this.root.data); 
			return;
		}
		let parent=this.root;
		let temp=this.root.left;
		while(temp){
			if(temp==parent.left) temp=parent.right;
			else {
				parent=parent.left;
				temp=parent.left;
			}
			temp.parent=parent;
		}
		temp=node;
		if(node[3]===temp)
		console.log(temp.data); 
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
