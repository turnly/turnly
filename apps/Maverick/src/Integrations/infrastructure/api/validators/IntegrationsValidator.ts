import { Validator } from '@turnly/shared'

export const validator = {
  get: Validator.object({ id: Validator.isId() }),
}
