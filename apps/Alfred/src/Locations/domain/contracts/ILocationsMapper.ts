import { IEntityMapper } from '@turnly/shared'
import { Location } from 'Locations/domain/entities/Location'

export type ILocationsMapper<Model> = IEntityMapper<Location, Model>
