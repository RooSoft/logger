# logger

## Manage application execution information

### Environment variables

LOG\_LEVEL | Values
--- | :---
Available | `trace`, `debug`, `info`, `warn`, `error`
Default | `info`

LOG\_FORMAT | Values
--- | :---
Available | `raw`, `json`, `console`
Default | `console`

LOG\_DATE\_FORMAT | Values
--- | :---
Available | see [moment.js](https://momentjs.com/docs/#/displaying/format) formats
Default | `YYYY-MM-DD`

LOG\_TIME\_FORMAT | Values
--- | :---
Available | see [moment.js](https://momentjs.com/docs/#/displaying/format) formats
Default | `H:mm:ss.SSS `

### How to use

Setup environment log level and format environment variables in your application. When logging from files, first require this library.

```javascript
const log = require('logger')
```

Then log in a similar way you would use `console.log`, except using one of these:
 
* `log.trace`
* `log.debug`
* `log.info`
* `log.warn`
* `log.error`

##### Example

```javascript
log.info('what is happening right now')
```