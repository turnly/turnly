import { Model } from '@turnly/core'
import { IntegrationStatus } from 'integrations/domain/enums/IntegrationStatus'
import { Column, Entity } from 'typeorm'

@Entity({ name: 'integrations' })
export class IntegrationModel extends Model {
  @Column()
  name: string

  @Column({
    type: 'enum',
    enum: IntegrationStatus,
  })
  status: IntegrationStatus

  @Column({ type: 'simple-array' })
  origins: string[]
}
