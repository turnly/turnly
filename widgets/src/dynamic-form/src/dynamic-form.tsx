import { h } from 'preact'

import { Form, FormField } from '../../components/form'
import { Title } from '../../components/typography'
import { Field } from './@types'
import { useParser } from './hooks/use-parser'

export interface DynamicFormProps {
  fields: Field[]
}

export const DynamicForm = ({ fields }: DynamicFormProps) => {
  const { parsedFields } = useParser({ fields })

  return (
    <Form>
      {parsedFields.map(parsed => (
        <FormField key={parsed.field.id}>
          <Title level={4} hasGaps={false}>
            {parsed.field.label}
          </Title>

          <select id={parsed.field.id}>
            {Array.isArray(parsed.parserContext.parsedValues) &&
              parsed.parserContext.parsedValues.map(option => (
                <option key={Math.random() * 19999} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        </FormField>
      ))}
    </Form>
  )
}
