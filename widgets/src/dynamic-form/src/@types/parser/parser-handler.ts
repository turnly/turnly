import { Field } from '../field'
import { ParserContext } from './parser-context'

export interface ParserHandler {
  constructor: (field: Field) => void
  createContext: () => ParserContext
}
