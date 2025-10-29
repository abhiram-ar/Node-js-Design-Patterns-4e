// Uncomment and execute the code below to trigger a "SyntaxError: Unexpected reserved word"


import { default } from './logger.js'
const logger = new default('a')
logger.log('Hello World')

// mynote: we cannot use the variable default as it is a reserved word in the language
// but  import * as something from "somewhere"
// something.default is valid
