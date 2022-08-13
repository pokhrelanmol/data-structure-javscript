// trees are made up of nodes and edges (connections between nodes) it is non linear data structure readiing and writing is quicker than linear data structure
// trees are usefull for representing graphs and trees
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.size = 0;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    // return true if tree is empty
    isEmpty() {
        return this.root === null;
    }
    size() {
        return this.size;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
            this.size++;
        } else {
            this.insertNode(this.root, newNode);
            this.size++;
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
                return;
            } else {
                // recursive call to insert node in left subtree
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
                return;
            } else {
                // recursive call to insert node in right subtree
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (this.isEmpty()) return "tree is empty";
        if (!root) return false;
        if (value === root.value) {
            return true;
        } else if (value > root.value) {
            return this.search(root.right);
        } else if (value < root.value) {
            return this.search(root.left, value);
        }
    }
    // what is tree traversal ?  it is a process of visiting each node in a tree
    // tree can be traversed in different ways
    // Depth first search(DFS) - preorder, inorder, postorder
    // Breadth first search(BFS) - level order traversal
    // preorder traversal - root, left, right
    // inorder traversal - left, root, right
    // postorder traversal - left, right, root
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
}

const bst = new Tree();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.isEmpty());
console.log(bst.search(bst.root, 8));
bst.preOrder(bst.root);
bst.inOrder(bst.root);
bst.postOrder(bst.root);
