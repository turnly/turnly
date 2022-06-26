import { Guid } from '@turnly/common'
import { GraphException } from 'shared/GraphException'

import { Services, Tickets } from '../shared/services'
import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

@CacheSource()
export class ServicesDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid, companyId: Guid) {
    const { data: service, meta } = await Services.getOne({
      id,

      companyId,
    })

    if (!service) throw new GraphException(meta)

    return service
  }

  public async getLocationServices(locationId: Guid, companyId: Guid) {
    const services = (
      await Services.findByLocation({
        locationId,
        companyId,
      })
    ).dataList

    if (!services) return []

    return services
  }

  public async getTicketsWaitingForService(
    serviceId: Guid,
    customerId: Guid,
    companyId: Guid
  ): Promise<number> {
    const services = (
      await Tickets.getTicketsWaitingForService({
        serviceIdsList: [serviceId],
        companyId,
        customerId,
      })
    ).dataList

    if (!services.length) return 0

    return services[0].ticketsList.length
  }
}
