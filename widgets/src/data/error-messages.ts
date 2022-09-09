export const ERROR_MESSAGES = {
  ID_MISSING: 'ID is missing from widget script',
  KEY_MISSING: 'Key is missing from widget',
  WIDGET_IS_LOADED: 'Oops! It seems that the widget has loaded',
  WIDGET_NO_LOADED: 'The widget was not found',
  SCREEN_NAME_REQUIRE: 'The "name" prop is required for each screen',
  NAVIGATE_NOT_IMPLEMENTED: 'Oops!, navigation has not been implemented',
  NAVIGATOR_CHILDREN:
    'A <Navigator /> can only contain "<Screen />" as its direct children',
  NAVIGATOR_NO_CHILDREN:
    'It seems that <Navigator /> has no children. You must add at least one child',
  OUTSIDE_OF_PROVIDER:
    "Couldn't find a context. Is your component outside a <Screen />?",
}
