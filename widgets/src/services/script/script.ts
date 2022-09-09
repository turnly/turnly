import { __DEV__, config, WIDGET_ID } from '../../config'
import { ERROR_MESSAGES } from '../../data'

/**
 * Script
 *
 * @description Verify that the client script has the corresponding Turnly identifier.
 *
 * @author Turnly
 */
export class Script {
  private static getWidgetId(scriptId: string) {
    /**
     * Access key for development
     *
     * @throws If you don't use CI to build a production widget,
     * make sure you don't include this line.
     */
    if (__DEV__) return WIDGET_ID // @patch-line

    const script = document.querySelector(scriptId)
    if (!script) throw new Error(ERROR_MESSAGES.ID_MISSING)

    const widgetId = new URL(
      script.getAttribute('src') as string
    ).searchParams.get('widgetId')

    if (!widgetId) throw new Error(ERROR_MESSAGES.KEY_MISSING)

    return widgetId
  }

  public static getDataFromScript(scriptId = `script#${config.SCRIPT_ID}`) {
    const widgetId = Script.getWidgetId(scriptId)

    return {
      widgetId,
      url: '',
    }
  }
}
