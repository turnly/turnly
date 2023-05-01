/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export enum Scopes {
  /***
   * Tickets
   */
  TICKETS_ALL = 'tickets:*',
  TICKETS_CREATE = 'tickets:create',
  TICKETS_DELETE = 'tickets:delete',
  TICKETS_GET = 'tickets:get',
  TICKETS_LIST = 'tickets:list',
  TICKETS_UPDATE = 'tickets:update',
  TICKETS_DISPLAY_ON_SIGNAGE = 'tickets:display_on_signage',

  /**
   * Customers
   */
  CUSTOMERS_ALL = 'customers:*',
  CUSTOMERS_CREATE = 'customers:create',
  CUSTOMERS_DELETE = 'customers:delete',
  CUSTOMERS_GET = 'customers:get',
  CUSTOMERS_LIST = 'customers:list',
  CUSTOMERS_UPDATE = 'customers:update',

  /**
   * Widgets
   */
  WIDGETS = 'widgets:*',
  WIDGETS_CREATE = 'widgets:create',
  WIDGETS_DELETE = 'widgets:delete',
  WIDGETS_GET = 'widgets:get',
  WIDGETS_LIST = 'widgets:list',
  WIDGETS_UPDATE = 'widgets:update',

  /**
   * Kiosks
   */
  KIOSKS = 'kiosks:*',
  KIOSKS_CREATE = 'kiosks:create',
  KIOSKS_DELETE = 'kiosks:delete',
  KIOSKS_GET = 'kiosks:get',
  KIOSKS_LIST = 'kiosks:list',
  KIOSKS_UPDATE = 'kiosks:update',

  /**
   * Devices
   */
  DEVICES_ALL = 'devices:*',
  DEVICES_CREATE = 'devices:create',
  DEVICES_DELETE = 'devices:delete',
  DEVICES_GET = 'devices:get',
  DEVICES_LIST = 'devices:list',
  DEVICES_UPDATE = 'devices:update',

  /**
   * Digital Signage
   */
  DIGITAL_SIGNAGE_ALL = 'digital_signage:*',
  DIGITAL_SIGNAGE_CREATE = 'digital_signage:create',
  DIGITAL_SIGNAGE_DELETE = 'digital_signage:delete',
  DIGITAL_SIGNAGE_GET = 'digital_signage:get',
  DIGITAL_SIGNAGE_LIST = 'digital_signage:list',
  DIGITAL_SIGNAGE_UPDATE = 'digital_signage:update',

  /**
   * Organizations
   */
  ORGANIZATIONS_GET = 'organization:get',
  ORGANIZATIONS_LIST = 'organization:list',

  /**
   * Members
   */
  MEMBERS_ALL = 'members:*',
  MEMBERS_CREATE = 'members:create',
  MEMBERS_DELETE = 'members:delete',
  MEMBERS_GET = 'members:get',
  MEMBERS_LIST = 'members:list',
  MEMBERS_UPDATE = 'members:update',

  /**
   * Invitations
   */
  INVITATIONS_ALL = 'invitations:*',
  INVITATIONS_CREATE = 'invitations:create',
  INVITATIONS_DELETE = 'invitations:delete',
  INVITATIONS_GET = 'invitations:get',
  INVITATIONS_LIST = 'invitations:list',
  INVITATIONS_UPDATE = 'invitations:update',

  /**
   * Fields
   */
  FIELDS_ALL = 'fields:*',
  FIELDS_CREATE = 'fields:create',
  FIELDS_DELETE = 'fields:delete',
  FIELDS_GET = 'fields:get',
  FIELDS_LIST = 'fields:list',
  FIELDS_UPDATE = 'fields:update',

  /**
   * Answers
   */
  ANSWERS_ALL = 'answers:*',
  ANSWERS_CREATE = 'answers:create',
  ANSWERS_DELETE = 'answers:delete',
  ANSWERS_GET = 'answers:get',
  ANSWERS_LIST = 'answers:list',
  ANSWERS_UPDATE = 'answers:update',

  /**
   * Locations
   */
  LOCATIONS_ALL = 'locations:*',
  LOCATIONS_CREATE = 'locations:create',
  LOCATIONS_DELETE = 'locations:delete',
  LOCATIONS_GET = 'locations:get',
  LOCATIONS_LIST = 'locations:list',
  LOCATIONS_UPDATE = 'locations:update',

  /**
   * Services
   */
  SERVICES_ALL = 'services:*',
  SERVICES_CREATE = 'services:create',
  SERVICES_DELETE = 'services:delete',
  SERVICES_GET = 'services:get',
  SERVICES_LIST = 'services:list',
  SERVICES_UPDATE = 'services:update',

  /**
   * Schedules
   */
  SCHEDULES_ALL = 'schedules:*',
  SCHEDULES_CREATE = 'schedules:create',
  SCHEDULES_DELETE = 'schedules:delete',
  SCHEDULES_GET = 'schedules:get',
  SCHEDULES_LIST = 'schedules:list',
  SCHEDULES_UPDATE = 'schedules:update',

  /**
   * Desks
   */
  DESKS_ALL = 'desks:*',
  DESKS_CREATE = 'desks:create',
  DESKS_DELETE = 'desks:delete',
  DESKS_GET = 'desks:get',
  DESKS_LIST = 'desks:list',
  DESKS_UPDATE = 'desks:update',

  /**
   * Processors
   */
  PROCESSORS_ALL = 'processors:*',
  PROCESSORS_CREATE = 'processors:create',
  PROCESSORS_DELETE = 'processors:delete',
  PROCESSORS_GET = 'processors:get',
  PROCESSORS_LIST = 'processors:list',
  PROCESSORS_UPDATE = 'processors:update',
}
