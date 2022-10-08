import { FunctionalComponent, h } from 'preact'

import { FormField, Input, InputProps } from '../../components/form'
import { Title } from '../../components/typography'
import { ParsedField } from './@types'
import { FORMAT_FIELDS } from './libs/parser'

export interface DynamicComponentProps {
  key: string
  parsedField: ParsedField
}

export const DynamicComponent = ({
  key,
  parsedField,
}: DynamicComponentProps) => {
  let _component: FunctionalComponent<InputProps> | null = null
  const field = parsedField.field
  // const context = parsedField.parserContext

  if (FORMAT_FIELDS.includes(field.type)) {
    _component = Input
  }

  if (!_component) return null

  return (
    <FormField key={key}>
      <Title level={4} hasGaps={false}>
        {field.label}
      </Title>

      <_component placeholder={field.placeholder} />
    </FormField>
  )
}
