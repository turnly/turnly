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
  TICKETS_ALL = 'tickets.*',
  TICKETS_CREATE = 'tickets.create',
  TICKETS_DELETE = 'tickets.delete',
  TICKETS_GET = 'tickets.get',
  TICKETS_LIST = 'tickets.list',
  TICKETS_UPDATE = 'tickets.update',

  /**
   * Customers
   */
  CUSTOMERS_ALL = 'customers.*',
  CUSTOMERS_CREATE = 'customers.create',
  CUSTOMERS_DELETE = 'customers.delete',
  CUSTOMERS_GET = 'customers.get',
  CUSTOMERS_LIST = 'customers.list',
  CUSTOMERS_UPDATE = 'customers.update',

  /**
   * Channels
   */
  CHANNELS_ALL = 'channels.*',
  CHANNELS_CREATE = 'channels.create',
  CHANNELS_DELETE = 'channels.delete',
  CHANNELS_GET = 'channels.get',
  CHANNELS_LIST = 'channels.list',
  CHANNELS_UPDATE = 'channels.update',

  /**
   * Widgets
   */
  WIDGETS = 'channels.widgets.*',
  WIDGETS_CREATE = 'channels.widgets.create',
  WIDGETS_DELETE = 'channels.widgets.delete',
  WIDGETS_GET = 'channels.widgets.get',
  WIDGETS_LIST = 'channels.widgets.list',
  WIDGETS_UPDATE = 'channels.widgets.update',

  /**
   * Kiosks
   */
  KIOSKS = 'channels.kiosks.*',
  KIOSKS_CREATE = 'channels.kiosks.create',
  KIOSKS_DELETE = 'channels.kiosks.delete',
  KIOSKS_GET = 'channels.kiosks.get',
  KIOSKS_LIST = 'channels.kiosks.list',
  KIOSKS_UPDATE = 'channels.kiosks.update',

  /**
   * Devices
   */
  DEVICES_ALL = 'channels.devices.*',
  DEVICES_CREATE = 'channels.devices.create',
  DEVICES_DELETE = 'channels.devices.delete',
  DEVICES_GET = 'channels.devices.get',
  DEVICES_LIST = 'channels.devices.list',
  DEVICES_UPDATE = 'channels.devices.update',

  /**
   * Digital Signage
   */
  DIGITAL_SIGNAGE_ALL = 'channels.digital-signage.*',
  DIGITAL_SIGNAGE_CREATE = 'channels.digital-signage.create',
  DIGITAL_SIGNAGE_DELETE = 'channels.digital-signage.delete',
  DIGITAL_SIGNAGE_GET = 'channels.digital-signage.get',
  DIGITAL_SIGNAGE_LIST = 'channels.digital-signage.list',
  DIGITAL_SIGNAGE_UPDATE = 'channels.digital-signage.update',

  /**
   * Access Tokens
   */
  ACCESS_TOKENS_ALL = 'access-tokens.*',
  ACCESS_TOKENS_CREATE = 'access-tokens.create',
  ACCESS_TOKENS_DELETE = 'access-tokens.delete',
  ACCESS_TOKENS_GET = 'access-tokens.get',
  ACCESS_TOKENS_LIST = 'access-tokens.list',

  /**
   * Organizations
   */
  ORGANIZATIONS_ALL = 'organizations.*',
  ORGANIZATIONS_CREATE = 'organizations.create',
  ORGANIZATIONS_DELETE = 'organizations.delete',
  ORGANIZATIONS_GET = 'organizations.get',
  ORGANIZATIONS_LIST = 'organizations.list',
  ORGANIZATIONS_UPDATE = 'organizations.update',

  /**
   * Members
   */
  MEMBERS_ALL = 'members.*',
  MEMBERS_CREATE = 'members.create',
  MEMBERS_DELETE = 'members.delete',
  MEMBERS_GET = 'members.get',
  MEMBERS_LIST = 'members.list',
  MEMBERS_UPDATE = 'members.update',

  /**
   * Fields
   */
  FIELDS_ALL = 'fields.*',
  FIELDS_CREATE = 'fields.create',
  FIELDS_DELETE = 'fields.delete',
  FIELDS_GET = 'fields.get',
  FIELDS_LIST = 'fields.list',
  FIELDS_UPDATE = 'fields.update',

  /**
   * Answers
   */
  ANSWERS_ALL = 'answers.*',
  ANSWERS_CREATE = 'answers.create',
  ANSWERS_DELETE = 'answers.delete',
  ANSWERS_GET = 'answers.get',
  ANSWERS_LIST = 'answers.list',
  ANSWERS_UPDATE = 'answers.update',

  /**
   * Locations
   */
  LOCATIONS_ALL = 'locations.*',
  LOCATIONS_CREATE = 'locations.create',
  LOCATIONS_DELETE = 'locations.delete',
  LOCATIONS_GET = 'locations.get',
  LOCATIONS_LIST = 'locations.list',
  LOCATIONS_UPDATE = 'locations.update',

  /**
   * Services
   */
  SERVICES_ALL = 'services.*',
  SERVICES_CREATE = 'services.create',
  SERVICES_DELETE = 'services.delete',
  SERVICES_GET = 'services.get',
  SERVICES_LIST = 'services.list',
  SERVICES_UPDATE = 'services.update',

  /**
   * Schedules
   */
  SCHEDULES_ALL = 'schedules.*',
  SCHEDULES_CREATE = 'schedules.create',
  SCHEDULES_DELETE = 'schedules.delete',
  SCHEDULES_GET = 'schedules.get',
  SCHEDULES_LIST = 'schedules.list',
  SCHEDULES_UPDATE = 'schedules.update',

  /**
   * Desks
   */
  DESKS_ALL = 'desks.*',
  DESKS_CREATE = 'desks.create',
  DESKS_DELETE = 'desks.delete',
  DESKS_GET = 'desks.get',
  DESKS_LIST = 'desks.list',
  DESKS_UPDATE = 'desks.update',

  /**
   * Processors
   */
  PROCESSORS_ALL = 'processors.*',
  PROCESSORS_CREATE = 'processors.create',
  PROCESSORS_DELETE = 'processors.delete',
  PROCESSORS_GET = 'processors.get',
  PROCESSORS_LIST = 'processors.list',
  PROCESSORS_UPDATE = 'processors.update',

  /**
   * Invitations
   */
  INVITATIONS_ALL = 'invitations.*',
  INVITATIONS_CREATE = 'invitations.create',
  INVITATIONS_DELETE = 'invitations.delete',
  INVITATIONS_GET = 'invitations.get',
  INVITATIONS_LIST = 'invitations.list',
  INVITATIONS_UPDATE = 'invitations.update',
}
