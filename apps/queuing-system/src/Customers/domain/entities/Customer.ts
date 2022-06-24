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
    private lastname: string,

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
    private country: string,

    /**
     * Entity Phone
     *
     * @description The phone number of the customer.
     */
    private phone: string,

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
     * Company
     *
     * @description The Company that the Customer belongs to.
     */
    private readonly companyId: Guid,

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
  public static create(
    attributes: Omit<EntityAttributes<Customer>, 'id'>
  ): Customer {
    const customer = new Customer(
      Identifier.generate('cust'),
      attributes.name,
      attributes.lastname,
      attributes.email,
      attributes.phone,
      attributes.country,
      attributes.hasWhatsapp,
      attributes.showNameSignage,
      attributes.companyId,
      attributes.extra
    )

    customer.register(new CustomerCreatedEvent(customer.toObject()))

    return customer
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
      attributes.companyId,
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
      companyId: this.companyId,
      extra: this.extra,
    }
  }
}
