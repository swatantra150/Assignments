class Tree {}
class Leaf extends Tree {}
class Branch extends Tree {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
}
function treeToParens(tree) {
    if (tree.left === undefined && tree.right === undefined) {
        return '()';
    } else {
        const leftParens = treeToParens(tree.left);
        const rightParens = treeToParens(tree.right);
        return `(${leftParens}${rightParens})`;
    }
}
function parensToTree(parens) {
    let index = 0;

    function parse() {
        if (parens[index] === '(') {
            index++;
            if (parens[index] === ')') {
                index++;
                return new Leaf();
            } else {
                const left = parse(); 
                const right = parse();
                index++; 
                return new Branch(left, right); 
            }
        }
        return null;
    }

    return parse();
}
const tree = new Branch(new Leaf(), new Branch(new Leaf(), new Leaf()));
const parens = treeToParens(tree);
console.log(parens);
const newTree = parensToTree(parens); 
console.log(treeToParens(newTree)); 
