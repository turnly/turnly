import { Validator } from '@turnly/shared'

const get = Validator.object({
  id: Validator.isId(),
})

export const validator = {
  get,
}
