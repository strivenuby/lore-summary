class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}
class BinaryTree {
    // 构造函数 new 时候调用
    constructor() {
        this.root = null
    }
    // 插入子节点
    insertNode(node, newNode) {
        if (node.key > newNode.key) {
            node.left === null ? node.left = newNode : this.insertNode(node.left, newNode)
        } else {
            node.right === null ? node.right = newNode : this.insertNode(node.right, newNode)
        }
    }
    // 插入节点
    insert(key) {
        let newNode = new Node(key)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    inOrderTraverseNode(node, callback) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }
    // 中序遍历
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }
    preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.key)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
        }
    }
    // 前序遍历
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(callback)
    }
    postOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.key)
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
        }
    }
    // 后序遍历
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(callback)
    }
    minNode(node) {
        if (node) {
            while (node && node.left != null) {
                node = node.left
            }
            return node.key
        }
        return null
    }
    // 查找最小值
    min() {
        return this.minNode(this.root)
    }
    maxNode(node) {
        if (node) {
            while (node && node.right != null) {
                node = node.right
            }
            return node.key
        }
        return null
    }
    // 查找最大值
    max() {
        return this.maxNode(this.root)
    }
    serachNode(node, key) {
        if (node === null) {
            return false
        }
        if (key < node.key) {
            return this.serachNode(node.left, key)
        } else if (key > node.key) {
            return this.serachNode(node.right, key)
        } else {
            return true
        }
    }
    // 查找节点
    serach(key) {
        return this.serachNode(this.root, key)
    }
    findMinNode(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }
            return node
        }
        return null
    }
    removeNode(node, key) {
        if (node === null) {
            return null
        }
        if (key < node.key) {
            node.left = this.removeNode(node.left, key)
            return node
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key)
            return node
        } else {
            if (node.left === null && node.right === null) {
                node = null
                return node
            }
            if (node.left === null) {
                node = node.right
                return node
            }
            if (node.right === null) {
                node = node.left
                return node
            }
            let aux = this.findMinNode(node.right)
            node.key = aux.key
            node.right = this.removeNode(node.right, aux.key)
            return node
        }
    }
    // 删除节点
    remove(key) {
        return this.remove(this.root, key)
    }
}

let tree = [2, 1, 5, 3, 6, 8, 4, 10, 7]
let binaryTree = new BinaryTree()

tree.forEach((key) => {
    binaryTree.insert(key)
})

function callback(key) {
    console.log(key)
}

// binaryTree.inOrderTraverse(callback)

console.log("min node value:", binaryTree.min())
console.log("max node value:", binaryTree.max())
console.log(binaryTree.serach(11))