import { Extra } from './extra'
import { FieldTypes } from './field-types'

export interface Field {
  id: string
  description?: string
  hasProcessors: boolean
  isRequired: boolean
  label: string
  placeholder: string
  type: FieldTypes
  processors: Array<unknown>
  extra: Array<Extra>
}
