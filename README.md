# @uiowa/spinner

[![Build Status](https://img.shields.io/travis/changhuixu/spinner/master.svg?label=Travis%20CI&style=flat-square)](https://app.travis-ci.com/changhuixu/spinner.svg?branch=main)
[![npm](https://img.shields.io/npm/v/@uiowa/spinner.svg?style=flat-square)](https://www.npmjs.com/package/@uiowa/spinner)

CHANGELOG

- **v12** Angular 12+
- **v10** Angular 10+
- **v6** Angular 6+

## [DEMO](https://spinner-1f3e5.firebaseapp.com/)

[StackBlitz](https://stackblitz.com/github/changhuixu/spinner)

This library only contains three components and doesn't have third party dependencies.

## Components

- `action-spinner`

  Rotating circles. Used for action promise or waiting for page rendering.
  Allow to set spinner size. By default, size is 1rem.

- `loading-bar`

  Beeping blocks. Used for server side data loading.
  Allow to set spinner size. By default, size is 1rem.

- `uiowa-ring`

  Rotating spinner with Golden and Black colors. Userd as loading indicator.
  Allow to set spinner size. By default, size is 4rem.

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

<h2>
  Title
  <action-spinner></action-spinner>
</h2>

<uiowa-ring></uiowa-ring> // default size = 4rem
<uiowa-ring size="2"></uiowa-ring>
```

```typescript
@NgModule({
  declarations: [...],
  imports: [..., SpinnerModule],  // import SpinnerModule
  providers: []
})
export class AppModule {}
```
