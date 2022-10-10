export interface ParserContextValues {
  label: string
  value: string
}

export interface ParserContext {
  values?: string
  parsedKey?: string
  parsedValues?: Array<ParserContextValues> | string
  field_id?: string
}
