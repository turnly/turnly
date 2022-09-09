/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra, Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'

import { CustomerCreatedEvent } from '../events/CustomerCreatedEvent'

/**
 * Customer
 *
 * @description Represents customers that can be used to create custom forms for any entity.
 *
 * @author Turnly
 */
export class Customer extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Customer
     */
    id: Guid,

    /**
     * Name
     *
     * @description A human-readable name for the Customer.
     */
    private name: string,

    /**
     * Lastname
     *
     * @description A human-readable lastname of the Customer.
     */
    private lastname: Nullable<string> = null,

    /**
     * Email
     *
     * @description The email of the Customer.
     */
    private email: Nullable<string> = null,

    /**
     * Entity Country
     *
     * @description The country of the customer.
     */
    private country: Nullable<string> = null,

    /**
     * Entity Phone
     *
     * @description The phone number of the customer.
     */
    private phone: Nullable<string> = null,

    /**
     * Entity HasWhatsapp
     *
     * @description If the customer has whatsapp with the phone number.
     */
    private hasWhatsapp: boolean,

    /**
     * Entity ShowNameSignage
     *
     * @description If the customer wants to show his name in the screen.
     */
    private showNameSignage: boolean,

    /**
     * Organization
     *
     * @description The Organization that the Customer belongs to.
     */
    private readonly organizationId: Guid,

    /**
     * Extra
     *
     * @description Free-form data as name/value pairs that can be used
     * to store additional information about the Customer.
     */
    private readonly extra: Nullable<Extra[]> = null
  ) {
    super(id)
  }

  /**
   * Create Customer
   *
   * @description Creates a new Customer.
   */
  public static create({
    name = this.getVisitorName(),
    ...attributes
  }: Omit<EntityAttributes<Customer>, 'id'>): Customer {
    const customer = new Customer(
      Identifier.generate('cust'),
      name,
      attributes.lastname,
      attributes.email,
      attributes.phone,
      attributes.country,
      attributes.hasWhatsapp,
      attributes.showNameSignage,
      attributes.organizationId,
      attributes.extra
    )

    customer.register(new CustomerCreatedEvent(customer.toObject()))

    return customer
  }

  private static getVisitorName() {
    return Identifier.holder('Visitor')
  }

  /**
   * Build Customer
   *
   * @description Builds a Customer from an object.
   */
  public static build(attributes: EntityAttributes<Customer>): Customer {
    return new Customer(
      attributes.id,
      attributes.name,
      attributes.lastname,
      attributes.email,
      attributes.phone,
      attributes.country,
      attributes.hasWhatsapp,
      attributes.showNameSignage,
      attributes.organizationId,
      attributes.extra
    )
  }

  /**
   * Customer object
   *
   * @description Returns the Customer as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      phone: this.phone,
      country: this.country,
      hasWhatsapp: this.hasWhatsapp,
      showNameSignage: this.showNameSignage,
      organizationId: this.organizationId,
      extra: this.extra,
    }
  }
}
