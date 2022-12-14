import { h } from 'preact'

import { Field } from './@types'
import { DynamicComponent } from './dynamic-component'
import { useParser } from './hooks/use-parser'

export interface DynamicFormProps {
  fields: Field[]
}

export const DynamicForm = ({ fields }: DynamicFormProps) => {
  const { parsedFields } = useParser({ fields })

  return (
    <>
      {parsedFields.map(parsed => (
        <DynamicComponent parsedField={parsed} key={parsed.field.id} />
      ))}
    </>
  )
}
