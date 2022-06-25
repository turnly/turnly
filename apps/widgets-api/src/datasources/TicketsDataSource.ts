import { Guid } from '@turnly/common'
import { TicketsMapper } from 'mappers/TicketsMapper'
import { GraphException } from 'shared/GraphException'

import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'
import { Tickets } from './common/services'

@CacheSource()
export class TicketsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid, customerId: Guid, companyId: Guid) {
    const { data: ticket, meta } = await Tickets.getOne({
      id,
      customerId,
      companyId,
    })

    if (!ticket) throw new GraphException(meta)

    return TicketsMapper.toDTO(ticket)
  }

  public async getTicketsBeforeYours(
    id: Guid,
    customerId: Guid,
    companyId: Guid
  ) {
    const { dataList } = await Tickets.getTicketsBeforeYours({
      id,
      companyId,
      customerId,
    })

    if (!dataList?.length) return 0

    return dataList.length
  }

  public async getCalledTo(_id: Guid, _customerId: Guid, _companyId: Guid) {
    /**
     * @todo Implement method to get calledTo (AssignedTo -> Desk)
     */
    return null
  }
}
