/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MemberRoles } from '@turnly/auth'
import { Extra, Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/core'
import { UnauthorizedException } from '@turnly/observability'
import { MemberCreatedEvent } from 'members/create-member/member-created.event'

/**
 * Member
 *
 * @description Represents answers that can be used to create custom forms for any entity.
 *
 * @author Turnly
 */
export class Member extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Member
     */
    id: Guid,

    /**
     * Name
     *
     * @description A human-readable name for the Member.
     */
    private name: string,

    /**
     * Role
     *
     * @description The role of the Member in the Organization.
     */
    private role: MemberRoles,

    /**
     * User Id
     *
     * @description An id given by IAM to the member.
     */
    private readonly userId: Guid,

    /**
     * Organization
     *
     * @description The Organization that the Member belongs to.
     */
    private readonly organizationId: Guid,

    /**
     * Location
     *
     * @description The Location where the Member is located.
     */
    private readonly locationId: Nullable<Guid> = null,

    /**
     * Extra
     *
     * @description Free-form data as name/value pairs that can be used
     * to store additional information about the Member.
     */
    private extra: Nullable<Extra[]> = null
  ) {
    super(id)
  }

  public isOwner(): boolean {
    return this.role === MemberRoles.OWNER
  }

  public isManager(): boolean {
    return this.role === MemberRoles.MANAGER
  }

  public isAgent(): boolean {
    return this.role === MemberRoles.AGENT
  }

  public asOwner(): Member {
    if (this.role !== MemberRoles.OWNER) {
      throw new UnauthorizedException(
        'Oops! You must be the owner of the organization to perform this action.'
      )
    }

    return this
  }

  public asManager(): Member {
    const roles = [MemberRoles.OWNER, MemberRoles.MANAGER]

    if (!roles.includes(this.role)) {
      throw new UnauthorizedException(
        'Oops! You must be a manager of the organization to perform this action.'
      )
    }

    return this
  }

  public setServingDesk(deskId: Guid): Member {
    if (!this.extra) this.extra = []

    const __KEY__ = 'servingDeskId'

    this.extra = this.extra.filter(e => e.key !== __KEY__)

    this.extra.push({ key: __KEY__, value: deskId })

    return this
  }

  public setServingFromIds(serviceIds: Guid[]): Member {
    if (!this.extra) this.extra = []

    const __KEY__ = 'servingFromIds'

    this.extra = this.extra.filter(e => e.key !== __KEY__)

    this.extra.push({ key: __KEY__, value: JSON.stringify(serviceIds) })

    return this
  }

  /**
   * Create Member
   *
   * @description Creates a new Member.
   */
  public static create(
    attributes: Omit<EntityAttributes<Member>, 'id'>
  ): Member {
    const member = new Member(
      Identifier.generate('member'),
      attributes.name,
      attributes.role,
      attributes.userId,
      attributes.organizationId,
      attributes.locationId,
      attributes.extra
    )

    member.register(new MemberCreatedEvent(member.toObject()))

    return member
  }

  /**
   * Build Member
   *
   * @description Builds a Member from an object.
   */
  public static build(attributes: EntityAttributes<Member>): Member {
    return new Member(
      attributes.id,
      attributes.name,
      attributes.role,
      attributes.userId,
      attributes.organizationId,
      attributes.locationId,
      attributes.extra
    )
  }

  /**
   * Member object
   *
   * @description Returns the Member as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      role: this.role,
      userId: this.userId,
      organizationId: this.organizationId,
      locationId: this.locationId,
      extra: this.extra,
    }
  }
}
