/**
 * Recursively count all nodes in the tree
 */
export function countAll(nodes) {
    let count = 0;
    for (const node of nodes) {
        count += 1 + countAll(node.children);
    }
    return count;
}

/**
 * Recursively count completed nodes
 */
export function countCompleted(nodes) {
    let count = 0;
    for (const node of nodes) {
        if (node.completed) count++;
        count += countCompleted(node.children);
    }
    return count;
}

/**
 * Recursively toggle completion for a node by id
 */
export function toggleCompletion(nodes, id) {
    return nodes.map((node) => {
        if (node.id === id) {
            return { ...node, completed: !node.completed };
        }
        return { ...node, children: toggleCompletion(node.children, id) };
    });
}

/**
 * Recursively toggle expand/collapse for a node by id
 */
export function toggleExpand(nodes, id) {
    return nodes.map((node) => {
        if (node.id === id) {
            return { ...node, expanded: !node.expanded };
        }
        return { ...node, children: toggleExpand(node.children, id) };
    });
}

/**
 * Recursively add a child to a node by id
 */
export function addChild(nodes, parentId, newChild) {
    return nodes.map((node) => {
        if (node.id === parentId) {
            return {
                ...node,
                expanded: true,
                children: [...node.children, newChild],
            };
        }
        return { ...node, children: addChild(node.children, parentId, newChild) };
    });
}

/**
 * Recursively delete a node by id
 */
export function deleteNode(nodes, id) {
    return nodes
        .filter((node) => node.id !== id)
        .map((node) => ({ ...node, children: deleteNode(node.children, id) }));
}

/**
 * Recursively update resources/videoLink for a node by id
 */
export function updateNodeResources(nodes, id, resources, videoLink) {
    return nodes.map((node) => {
        if (node.id === id) {
            return { ...node, resources, videoLink };
        }
        return { ...node, children: updateNodeResources(node.children, id, resources, videoLink) };
    });
}

/**
 * Check if a node and ALL its descendants are completed
 */
export function isSubtreeComplete(node) {
    if (!node.completed) return false;
    return node.children.every((child) => isSubtreeComplete(child));
}

/**
 * Generate a unique id
 */
export function generateId() {
    return `node-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
