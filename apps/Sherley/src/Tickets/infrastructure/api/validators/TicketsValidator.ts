import { Validator } from '@turnly/core'

export const validator = {
  get: Validator.object({ id: Validator.string() }),
}
