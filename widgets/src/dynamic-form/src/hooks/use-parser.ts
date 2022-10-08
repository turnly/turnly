import { useMemo } from 'preact/hooks'

import { Field } from '../@types'
import { parserFields } from '../libs/parser'

export interface UseParserProps {
  fields: Field[]
}

export const useParser = ({ fields }: UseParserProps) => {
  const parsedFields = useMemo(() => parserFields(fields), [fields])

  return { parsedFields }
}
