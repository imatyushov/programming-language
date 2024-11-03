import Token from "../Token";
import ExpressionNode from "./ExpressionNode";

export default class NumberNode {
    number: Token;

    constructor(number: Token) {
        this.number = number;
    }
}