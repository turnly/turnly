<div align="center">
  <p align="center">
      <a href="https://turnly.app" target="_blank" rel="noopener">
          <img src="https://raw.githubusercontent.com/turnly/turnly/develop/docs/assets/github-header.png" />
      </a>
  </p>

  <p>
    <sub>
      Built with ❤︎ by
      <a href="/OWNERS.md">
        maintainers
      </a>
    </sub>
  </p>
</div>

# Widgets

Turnly Widgets is a live ticketing solution that helps businesses improve the customer experience by allowing them to take tickets from their websites in an interactive and simple way.

### How to use

You just need to add the script on your website or app with the `widgetId` provided by Turnly.

> It is important not to remove the `id` from the script as it is used as an identity in the DOM.

```html
  <!-- Turnly widget begin -->
  <script
    id="tly-widget"
    type="text/javascript"
    data-tly-url="https://{organization}.turnly.app"
    data-tly-widget-id="int_S1M1kGUqofhgfnuoyveSMs5y"
    src="https://cdn.turnly.app/widget.js"
  >
  </script>
  <!-- Turnly widget end -->
```

#### Technologies stack

| Name                                | Description                                                 |
|-------------------------------------|-------------------------------------------------------------|
| [Preact](https://preactjs.com/)     | Lighter React alternative with the same modern API          |
| TypeScript                          | Types reduce bugs and increases reliability                 |
| Sass                                | CSS with superpowers                                        |
| [Vite](https://vitejs.dev/)         | Bundler and development environment runner                  |

#### DOM Events

Turnly Widget provides custom events for most widget actions. Generally,
these are loaded with data related to the event and the current state of the widget.

> To view all available events, go to [DOM Events](/src/services/event-bus/EventName.ts)

Example:

```javascript
window.addEventListener("tly.widget.ready", e => console.log(e.detail));
```

#### Supported Browsers

Turnly supports most modern browsers on mobile and desktop.

> This represents only a general part of the supported and tested browsers.

| Browser                                       | Version | Supported              |
|-----------------------------------------------|---------|:----------------------:|
| Chrome                                        | 53+     | ✅                     |
| Edge                                          | 12+     | ✅                     |
| Firefox                                       | 42+     | ✅                     |
| Safari                                        | 11+     | ✅                     |
| IE                                            | ALL     | `Not supported`        |
| Opera Mini                                    | ALL     | `Not supported`        |
| Baidu Browser, Alibaba Browser, Others.       | ALL     | `Unknown`              |
