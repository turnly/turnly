/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/core'
import { WidgetCreatedEvent } from 'widgets/create-widget/widget-created.event'

import { WidgetStatus } from '../enums/widget-status.enum'

/**
 * Widget
 *
 * @description Represent an Widget that is used to take tickets from a website.
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
    private readonly organizationId: Guid,

    /**
     * Device
     *
     * @description The Device that the Widget is connected to.
     */
    private readonly deviceId: Guid,

    /**
     * Open by default
     *
     * @description If the Widget should be open by default.
     */
    private openByDefault: boolean = false,

    /**
     * Show fullscreen
     *
     * @description If the Widget should be shown in fullscreen.
     */
    private showFullscreen: boolean = false,

    /**
     * Show close button
     *
     * @description If the Widget should show a close button.
     */
    private showCloseButton: boolean = false,

    /**
     * Position
     *
     * @description The position of the Widget. (e.g. right, left)
     */
    private position: Nullable<string> = null
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
      Identifier.generate('widget'),
      attributes.name,
      attributes.status,
      attributes.origins,
      attributes.organizationId,
      attributes.deviceId,
      attributes.openByDefault,
      attributes.showFullscreen,
      attributes.showCloseButton,
      attributes.position
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
      attributes.organizationId,
      attributes.deviceId,
      attributes.openByDefault,
      attributes.showFullscreen,
      attributes.showCloseButton,
      attributes.position
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
      deviceId: this.deviceId,
      openByDefault: this.openByDefault,
      showFullscreen: this.showFullscreen,
      showCloseButton: this.showCloseButton,
      position: this.position,
    }
  }
}
