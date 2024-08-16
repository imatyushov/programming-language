import Token from "./Token";
import { TokenTypeList } from "./TokenType";

export default class Lexer {
    code: string;
    tokenList: Token[] = [];
    position: number = 0;

    constructor(code: string) {
        this.code = code;
    }

    lexicAnalysis() {
        while(this.codeIterator()) {
            this.tokenList = this.tokenList.filter((token) => {
                token.type.name !== TokenTypeList.SPACE.name
            })
            return this.tokenList;
        }
    }    

    codeIterator(): boolean {
        if (this.position >= this.tokenList.length) {
            return false;
        }
        const tokenTypeValues = Object.values(TokenTypeList);

        for (let index = 0; index < tokenTypeValues.length; index++) {
            const tokenTypeValue = tokenTypeValues[index];
            const regex = new RegExp('^' + tokenTypeValue.regex);

            const result = this.code.substring(this.position[0]).match(regex);

            if (result && result[0]) {
                const token = new Token(tokenTypeValue, result[0], this.position);
                this.position;
                this.tokenList.push(token);
                return true;
            }
        }
        throw new Error(`На позиции ${this.position} ошибка`);
    }
}