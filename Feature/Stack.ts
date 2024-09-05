
const tree = {
    value: 1, 
    children: [{
        value: 2,
        children: []
    }],
}

function getTreeValues(tree) {
    const stack = [tree];
    const result = [];

    while (stack.length > 0) {
        const node = stack.pop();

        if(node.value !== undefined) {
            result.push(node.value);
        }
        if(node.children?.length) {
            result.push(...node.children);
        }
    }

    return result;
}