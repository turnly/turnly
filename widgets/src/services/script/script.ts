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

    const url = script.getAttribute('data-tly-url') as string
    const widgetId = script.getAttribute('data-tly-widget-id') as string

    if (!url || !widgetId) throw new Error(ERROR_MESSAGES.KEY_MISSING)

    return {
      url,
      widgetId,
    }
  }

  public static getDataFromScript(scriptId = `script#${config.SCRIPT_ID}`) {
    const data = Script.getData(scriptId)

    return data
  }
}
