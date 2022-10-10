import { FunctionalComponent, h } from 'preact'
import { useFormContext } from 'react-hook-form'

import { FormField, Input } from '../../components/form'
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
  const {
    register,
    formState: { errors },
  } = useFormContext()

  let _component: FunctionalComponent<any> | null = null
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

      <_component
        placeholder={field.description}
        isDanger={field.id in errors}
        {...register(field.id, {
          required: field.isRequired,
        })}
      />
    </FormField>
  )
}
