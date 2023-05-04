/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/core'

import { OrganizationCreatedEvent } from '../../../create-organization/organization-created.event'
import { OrganizationPlans } from '../enums/organization-plans.enum'
import { OrganizationStatus } from '../enums/organization-status.enum'

/**
 * Organization
 *
 * @description Represents an customer of the Turnly application.
 *
 * @author Turnly
 */
export class Organization extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Organization
     */
    id: Guid,

    /**
     * Name
     *
     * @description The name of the Organization.
     */
    private name: string,

    /**
     * Status
     *
     * @description The status of the Organization.
     */
    private status: OrganizationStatus,

    /**
     * Subdomain
     *
     * @description The subdomain is a unique identifier for
     * the Organization that is used to access the application.
     */
    private subdomain: string,

    /**
     * Plan
     *
     * @description The current plan of the Organization (open-source, basic, etc.).
     */
    private plan: OrganizationPlans,

    /**
     * Disabled Telemetry
     *
     * @description Our application collects telemetry data to help us improve the application.
     */
    private disabledTelemetry: boolean = false,

    /**
     * Branding Logo
     *
     * @description The logo of the Organization.
     */
    private brandingLogo: Nullable<string> = null,

    /**
     * Branding Primary Color
     *
     * @description The primary color of the Organization branding.
     */
    private brandingPrimaryColor: Nullable<string> = null,

    /**
     * Branding Secondary Color
     *
     * @description The secondary color of the Organization branding.
     */
    private brandingSecondaryColor: Nullable<string> = null,

    /**
     * Branding Primary Background
     *
     * @description The primary background of the Organization branding.
     */
    private brandingPrimaryBackground: Nullable<string> = null,

    /**
     * Branding Secondary Background
     *
     * @description The secondary background of the Organization branding.
     */
    private brandingSecondaryBackground: Nullable<string> = null,

    /**
     * Branding Design Type
     *
     * @description The design type of the Organization branding (flat, rounded, etc.).
     */
    private brandingDesignType: Nullable<string> = null
  ) {
    super(id)
  }

  public canCustomizeBranding(): boolean {
    const plans = [
      OrganizationPlans.PLUS,
      OrganizationPlans.BUSINESS,
      OrganizationPlans.ENTERPRISE,
    ]

    return plans.includes(this.plan)
  }

  public setBranding(branding: {
    brandingLogo?: Nullable<string>
    brandingPrimaryColor?: Nullable<string>
    brandingSecondaryColor?: Nullable<string>
    brandingPrimaryBackground?: Nullable<string>
    brandingSecondaryBackground?: Nullable<string>
    brandingDesignType?: Nullable<string>
  }): Organization {
    const {
      brandingLogo,
      brandingPrimaryColor,
      brandingSecondaryColor,
      brandingPrimaryBackground,
      brandingSecondaryBackground,
      brandingDesignType,
    } = branding

    if (this.canCustomizeBranding()) {
      this.brandingLogo = brandingLogo ?? null
      this.brandingPrimaryColor = brandingPrimaryColor ?? null
      this.brandingSecondaryColor = brandingSecondaryColor ?? null
      this.brandingPrimaryBackground = brandingPrimaryBackground ?? null
      this.brandingSecondaryBackground = brandingSecondaryBackground ?? null
      this.brandingDesignType = brandingDesignType ?? null
    }

    return this
  }

  public isActive(): boolean {
    return this.status === OrganizationStatus.ACTIVE
  }

  public isBlocked(): boolean {
    const statuses = [
      OrganizationStatus.BLOCKED,
      OrganizationStatus.SUSPENDED,
      OrganizationStatus.PENDING_FOR_APPROVAL,
      OrganizationStatus.PENDING_FOR_PAYMENT,
      OrganizationStatus.PENDING_FOR_TRIAL,
      OrganizationStatus.PENDING_FOR_VERIFICATION,
    ]

    return statuses.includes(this.status)
  }

  /**
   * Create Organization
   *
   * @description Creates a new Organization.
   */
  public static create(
    attributes: Omit<EntityAttributes<Organization>, 'id'>
  ): Organization {
    const organizationId = Identifier.generate('org')

    const organization = new Organization(
      organizationId,
      attributes.name,
      attributes.status,
      attributes.subdomain,
      attributes.plan,
      attributes.disabledTelemetry
    )

    organization.setBranding(attributes)

    organization.register(
      new OrganizationCreatedEvent({
        ...organization.toObject(),
        organizationId,
      })
    )

    return organization
  }

  /**
   * Build Organization
   *
   * @description Builds an Organization from an object.
   */
  public static build(
    attributes: EntityAttributes<Organization>
  ): Organization {
    const organization = new Organization(
      attributes.id,
      attributes.name,
      attributes.status,
      attributes.subdomain,
      attributes.plan,
      attributes.disabledTelemetry
    )

    organization.setBranding(attributes)

    return organization
  }

  /**
   * Organization object
   *
   * @description Returns the Organization as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
      subdomain: this.subdomain,
      plan: this.plan,
      disabledTelemetry: this.disabledTelemetry,
      brandingLogo: this.brandingLogo,
      brandingPrimaryColor: this.brandingPrimaryColor,
      brandingSecondaryColor: this.brandingSecondaryColor,
      brandingPrimaryBackground: this.brandingPrimaryBackground,
      brandingSecondaryBackground: this.brandingSecondaryBackground,
      brandingDesignType: this.brandingDesignType,
    }
  }
}
