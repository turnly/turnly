import { h } from 'preact'
import { Controller, useFormContext } from 'react-hook-form'

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
  const { control } = useFormContext()

  const customField = parsedField.field
  const context = parsedField.parserContext

  if (!FORMAT_FIELDS.includes(customField.type)) return null

  return (
    <FormField key={key}>
      <Title level={4} hasGaps={false}>
        {customField.label}
      </Title>

      <Controller
        name={customField.id}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input
            isFormat={!!context.parsedKey}
            format={context.parsedKey}
            isDanger={!!error}
            textError={error?.message}
            placeholder={customField.description}
            {...field}
          />
        )}
        rules={{
          required: customField.isRequired && 'This field is required',
          maxLength: context.parsedKey?.length,
        }}
      />
    </FormField>
  )
}
