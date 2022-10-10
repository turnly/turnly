import { Field } from '../field'
import { ParserContext } from './parser-context'

export interface ParsedField {
  field: Field
  parserContext: ParserContext
}
