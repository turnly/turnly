/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * Callback Func
 *
 * @description Is a function that is called when the client receives a message from the server.
 *
 * @author Turnly
 */
export type ClientCallback = <D>(data: D) => void

export type SubscribeObject = { roomChannel: string; [k: string]: any }
