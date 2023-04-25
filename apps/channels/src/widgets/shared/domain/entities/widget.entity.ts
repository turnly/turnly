/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/shared'
import { WidgetCreatedEvent } from 'widgets/create-widget/events/widget-created.event'

import { WidgetStatus } from '../enums/widget-status.enum'

/**
 * Widget
 *
 * @description Represent an Widget that is used to connect
 * to a third-party service or applications.
 *
 * @author Turnly
 */
export class Widget extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Widget
     */
    id: Guid,

    /**
     * Name
     *
     * @description The name of the Widget.
     */
    private name: string,

    /**
     * Status
     *
     * @description Represents the life-cycle of an Widget.
     */
    private status: WidgetStatus,

    /**
     * Origins
     *
     * @description The white-listed origins that are allowed to access the Widget.
     */
    private origins: string[],

    /**
     * Organization
     *
     * @description The Organization that the Widget belongs to.
     */
    private readonly organizationId: Guid
  ) {
    super(id)
  }

  /**
   * Create Widget
   *
   * @description Creates a new Widget.
   */
  public static create(
    attributes: Omit<EntityAttributes<Widget>, 'id'>
  ): Widget {
    const widget = new Widget(
      Identifier.generate('int'),
      attributes.name,
      attributes.status,
      attributes.origins,
      attributes.organizationId
    )

    widget.register(new WidgetCreatedEvent(widget.toObject()))

    return widget
  }

  /**
   * Build Widget
   *
   * @description Builds an Widget from an object.
   */
  public static build(attributes: EntityAttributes<Widget>): Widget {
    return new Widget(
      attributes.id,
      attributes.name,
      attributes.status,
      attributes.origins,
      attributes.organizationId
    )
  }

  /**
   * Widget object
   *
   * @description Returns the Widget as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
      origins: this.origins,
      organizationId: this.organizationId,
    }
  }
}
