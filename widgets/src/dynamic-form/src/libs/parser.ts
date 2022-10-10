import {
  Field,
  FieldTypes,
  ParsedField,
  ParserContext,
  ParserContextValues,
} from '../@types'

export const OPTIONS_FIELDS = [FieldTypes.DROP_DOWN, FieldTypes.LIST]

export const FORMAT_FIELDS = [
  FieldTypes.TEXT,
  FieldTypes.NATIONAL_IDENTITY_CARD,
  FieldTypes.PHONE,
]

export const parserFields = (fields: Field[]): ParsedField[] => {
  return fields.map(parserDispatcher)
}

export const parserDispatcher = (field: Field) => {
  let context: ParserContext = {}

  if (OPTIONS_FIELDS.includes(field.type)) {
    context = parserOptions(field)
  }

  if (FORMAT_FIELDS.includes(field.type)) {
    context = parserFormat(field)
  }

  return {
    field,
    parserContext: context,
  } as ParsedField
}

/**
 * parserOptions - Get all options values from extra list
 *
 * @param field{Field}
 * @returns ParserContext
 */
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

/**
 * parserFormat - Get the pattern to format input value from extra list.
 * @param field{Field}
 * @returns {ParserContext}
 */
export const parserFormat = ({ id, extra }: Field): ParserContext => {
  const template = extra.find(e => e.key === 'format')

  return {
    parsedKey: template?.value,
    field_id: id,
  } as ParserContext
}
