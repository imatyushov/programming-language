import Lexer from "./Lexer"


const code = 
`
    сумма РАВНО 5 МИНУС 9;
    КОНСОЛЬ СУММА;
`

const lexer = new Lexer(code);
lexer.lexicAnalysis();