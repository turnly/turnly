import { config } from '../../config'
import { ERROR_MESSAGES } from '../../data'

/**
 * Script
 *
 * @description Verify that the client script has the corresponding Turnly identifier.
 *
 * @author Turnly
 */
export class Script {
  private static getData(scriptId: string) {
    const script = document.querySelector(scriptId)
    if (!script) throw new Error(ERROR_MESSAGES.ID_MISSING)

    const organizationURL = script.getAttribute(config.SCRIPT_TLY_URL) as string
    const widgetId = script.getAttribute(config.SCRIPT_TLY_WIDGET_ID) as string

    if (!organizationURL || !widgetId)
      throw new Error(ERROR_MESSAGES.KEY_MISSING)

    return {
      organizationURL,
      widgetId,
    }
  }

  public static getDataFromScript(scriptId = `script#${config.SCRIPT_ID}`) {
    const data = Script.getData(scriptId)

    return data
  }
}
