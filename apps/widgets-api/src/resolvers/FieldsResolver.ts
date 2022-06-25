import { IContext } from '@types'
import { Fields } from 'datasources'
import { FieldModel } from 'models/FieldModel'
import { Arg, Authorized, Ctx, ID, Query, Resolver } from 'type-graphql'

@Resolver(FieldModel)
export class FieldsResolver {
  @Authorized()
  @Query(() => [FieldModel])
  public async getServiceFields(
    @Arg('serviceId', () => ID) serviceId: string,
    @Ctx() { req: { companyId } }: IContext
  ): Promise<FieldModel[]> {
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
