/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * Turnly Edition
 *
 * @returns true if the app is running in Turnly CE
 */
export const isCommunityEdition = () => process.env.APP_EDITION === 'community'
