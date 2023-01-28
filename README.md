# HDR check

Pure js NPM package to check hdr support in css (browser and hardware)

[homepage](https://hdr.js.garden) | [github](https://github.com/slimcandy/isit-hdr-ready)

## Installation

Install it in a project

```bash
npm install isit-hdr-ready
```

## Basic usage

You can use it in your markup like this:

```html
<p class="hdr-not-ready-message">✅ Browser support sRGB</p>
<p class="hdr-ready-message hidden">✅ Browser and Hardware is HDR ready</p>
```

Then check hdr support and change block, picture or js logic:

```js
import isitHDRReady from "isit-hdr-ready";

const hdrReadyMessage = document.querySelector(".hdr-ready-message");
if (isitHDRReady()) {
  hdrReadyMessage.classList.remove("hidden");
}
```

## ⚠️ It checks only display-p3 support
