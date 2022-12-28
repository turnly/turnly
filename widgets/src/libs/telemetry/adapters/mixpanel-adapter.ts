import mixpanel from 'mixpanel-browser'

import { config } from '../../../config'

mixpanel.init(config.MIXPANEL_TOKEN)

export const mixPanel = {
  track: (eventTitle: string) => mixpanel.track(eventTitle),
}
