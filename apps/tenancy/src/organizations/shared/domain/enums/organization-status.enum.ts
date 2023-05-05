/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/**
 * Organization statuses
 *
 * @enum
 * @author Turnly
 */
export enum OrganizationStatus {
  ACTIVE = 'active',
  BLOCKED = 'blocked',
  SUSPENDED = 'suspended',
  PENDING_FOR_APPROVAL = 'pending_for_approval',
  PENDING_FOR_PAYMENT = 'pending_for_payment',
  PENDING_FOR_TRIAL = 'pending_for_trial',
  PENDING_FOR_VERIFICATION = 'pending_for_verification',
}
