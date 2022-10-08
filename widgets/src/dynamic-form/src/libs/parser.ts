import {
  Field,
  FieldTypes,
  ParsedField,
  ParserContext,
  ParserContextValues,
} from '../@types'

export const OPTIONS_FIELDS = [FieldTypes.DROP_DOWN, FieldTypes.LIST]

export const FORMAT_FIELDS = [FieldTypes.TEXT]

export const parserFields = (fields: Field[]): ParsedField[] => {
  console.log(fields)
  // eslint-disable-next-line no-debugger
  debugger
  return fields.map(parserDispatcher)
}

export const parserDispatcher = (field: Field) => {
  let context: ParserContext = {}

  if (OPTIONS_FIELDS.includes(field.type)) {
    context = parserOptions(field)
  }

  if (!FORMAT_FIELDS.includes(field.type)) {
    context = parserOptions(field)
  }

  return {
    field,
    parserContext: context,
  } as ParsedField
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const parserFormat = (_field: Field): ParserContext => {
  return {} as ParserContext
}

export const parserOptions = ({ id, extra }: Field): ParserContext => {
  const extraFound = extra.find(e => e.key === 'options')
  const list_options = JSON.parse(extraFound?.value || '[]') as string[]
  const options = list_options.map(option => {
    const [label, value] = option.split(':')

    return { value, label } as ParserContextValues
  })

  return {
    parsedValues: options,
    parsedKey: extraFound?.key,
    field_id: id,
    values: extraFound?.value,
  } as ParserContext
}
