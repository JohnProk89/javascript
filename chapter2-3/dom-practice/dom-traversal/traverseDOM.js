/**
 * Visits each node in a pre-order mode.
 * That is root, left node, right node.
 * 
 * @param {Node} tree - the tree root node
 */
function preOrderTraversal(tree) {
    console.log(tree);
    // console.dir(tree); // more consistentt than console.log() for this purpose...
    for (const subtree of tree.children) {
        preOrderTraversal(subtree)
    }
}

preOrderTraversal(document)