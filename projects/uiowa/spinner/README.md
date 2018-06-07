# @uiowa/spinner

[![Build Status](https://img.shields.io/travis/changhuixu/spinner/master.svg?label=Travis%20CI&style=flat-square)](https://travis-ci.org/changhuixu/spinner)
[![npm](https://img.shields.io/npm/v/@uiowa/spinner.svg?style=flat-square)](https://www.npmjs.com/package/@uiowa/spinner)

## [DEMO](https://stackblitz.com/github/changhuixu/spinner)

This library only contains two components and doesn't have third party dependencies.
> The CSS were modified and inspired from [SpinKit](https://github.com/tobiasahlin/SpinKit).

## Components

- `action-spinner`

  Rotating circles. Used for action promise or waiting for page rendering.
  Allow to set spinner size. By default, size is 1rem.

- `loading-bar`

  Beeping blocks. Used for server side data loading.
  Allow to set spinner size. By default, size is 1rem.

## Usage

```html
<div>
  <action-spinner></action-spinner>
</div>

<div>
  <action-spinner size="2"></action-spinner>
</div>

<div>
  <action-spinner size="9"></action-spinner>
</div>

<loading-bar>Loading...</loading-bar>

<loading-bar size="1.5">Loading...</loading-bar>

<div style="color:red;">
  <loading-bar size="2">
    <span style="font-size:2rem;">Validating ...</span>
  </loading-bar>
</div>

<h2>Title
  <action-spinner></action-spinner>
</h2>
```

```typescript
@NgModule({
  declarations: [...],
  imports: [..., SpinnerModule],  // import SpinnerModule
  providers: [],
  bootstrap: [...]
})
export class AppModule {}
```
