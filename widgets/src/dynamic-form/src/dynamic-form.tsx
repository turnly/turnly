import { h } from 'preact'
import { useFormContext } from 'react-hook-form'

import { Form } from '../../components/form'
import { Field } from './@types'
import { DynamicComponent } from './dynamic-component'
import { useParser } from './hooks/use-parser'

export interface DynamicFormProps {
  fields: Field[]
}

export const DynamicForm = ({ fields }: DynamicFormProps) => {
  const { handleSubmit } = useFormContext()
  const { parsedFields } = useParser({ fields })

  return (
    <Form onSubmit={handleSubmit(data => console.log(data))}>
      {parsedFields.map(parsed => (
        <DynamicComponent parsedField={parsed} key={parsed.field.id} />
      ))}
    </Form>
  )
}
