import Token from "../Token";
import ExpressionNode from "./ExpressionNode";


export default class AssignNode extends ExpressionNode {
    operator: Token;
    letfNode: ExpressionNode;
    rightNode: ExpressionNode;

    constructor(operator: Token, letfNode: ExpressionNode, rightNode: ExpressionNode) {
        super();
        this.operator = operator;
        this.letfNode = letfNode;
        this.rightNode = rightNode;
    }
}