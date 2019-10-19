class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		if(this.left==null) { this.left=node; node.parent=this;}
		else if(this.right==null) {this.right=node; node.parent=this;}
	}

	removeChild(node) {
		if(this.left==node) 
		{
			this.left.parent=null;
			this.left=null; 
		}
			else 
			if(this.right==node) 
			{
				this.right.parent=null;
				this.right=null; 
			}
			else throw new Error();
	}

	remove() {
		if(this.parent) this.parent.removeChild(this);
	}

	swapWithParent() {
		
		if(this.parent) {
			if(this.left) this.left.parent=this.parent;
			if(this.right) this.right.parent=this.parent;
			let buf=this.parent;
			if(this.parent.left==this){
				if(this.parent.right) this.parent.right.parent=this;
				this.parent.left=this.left;
				buf=this.parent.right;
				this.parent.right=this.right;
				this.right=buf;
				this.left=this.parent;
			}
			else {
				this.parent.left.parent=this;
				this.parent.right=this.right;
				this.right=this.parent;
				buf=this.parent.left;
				this.parent.left=this.left;
				this.left=buf;
			}
			if(this.parent.parent) { if(this.parent.parent.left==this.parent) this.parent.parent.left=this;
				else this.parent.parent.right=this;
			buf=this.parent;
			this.parent=this.parent.parent;
			buf.parent=this;
			}
			else { this.parent.parent=this;
				this.parent=null;}
		}
	}
}
module.exports = Node;
