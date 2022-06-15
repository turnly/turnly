import { ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  ICommandBus,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { CreateCustomersCommand } from 'Customers/application/commands/CreateCustomerCommand'
import { CustomerByIdQuery } from 'Customers/application/queries'
import { Customer } from 'Customers/domain/entities/Customer'
import { CreateCustomerPayload } from 'Customers/domain/payloads/CreateCustomerPayload'
import { GetCustomerPayload } from 'Customers/domain/payloads/GetCustomerPayload'

import { validator } from '../validators/CustomerValidator'

export class CustomersController extends Controller {
  public constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus
  ) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.create)
  public async create(params: CreateCustomerPayload) {
    const customer = await this.commandBus.execute<
      CreateCustomersCommand,
      Customer
    >(new CreateCustomersCommand(params))

    return this.respond.created(customer.toObject())
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async get(params: GetCustomerPayload) {
    const customer = await this.queryBus.ask(new CustomerByIdQuery(params))

    if (!customer) throw new ResourceNotFoundException()

    return this.respond.ok(customer.toObject())
  }
}
