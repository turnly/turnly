import { IContext } from '@types'
import { Field } from 'models/Field'
import { Fields } from 'services'
import { Arg, Authorized, Ctx, ID, Query, Resolver } from 'type-graphql'

@Resolver(Field)
export class FieldsResolver {
  @Authorized()
  @Query(() => [Field])
  public async getServiceFields(
    @Arg('serviceId', () => ID) serviceId: string,
    @Ctx() { req: { companyId } }: IContext
  ): Promise<Field[]> {
    const fields = (
      await Fields.findCustomerFieldsByService({
        serviceId,
        companyId,
      })
    ).dataList

    if (!fields) return []

    return fields.map(
      ({ id, label, description, type, isRequired, processorsList }) => ({
        id,
        label,
        description,
        type,
        isRequired,
        hasProcessors: Boolean(processorsList.length),
      })
    )
  }
}
