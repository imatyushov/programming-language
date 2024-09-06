import Token from "./Token";

export default class Parser {
    tokens: Token[];
    position: number = 0;
    scope: any = {};


    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    match() {

    }

    require() {

    }

    parseVariableOrNumber() {

    }

    parsePrint() {

    }

    parseParenthesis() {

    }

    parseFormula() {

    }

    parseExpression() {

    }

    parseCode() {

    }

    run() {
        
    }

}