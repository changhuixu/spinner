# @uiowa/spinner

[![Build Status](https://github.com/changhuixu/spinner/actions/workflows/main.yml/badge.svg)](https://github.com/changhuixu/spinner/actions)
[![npm](https://img.shields.io/npm/v/@uiowa/spinner.svg?style=flat-square)](https://www.npmjs.com/package/@uiowa/spinner)

CHANGELOG

- **v21** Angular 19+; standalone components
- **v19** Angular 19+
- **v13** Angular 13+
- **v12** Angular 12+
- **v10** Angular 10+
- **v6** Angular 6+

## [DEMO](https://changhuixu.github.io/spinner/)

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

  Rotating spinner with Golden and Black colors. Used as loading indicator.
  Allow to set spinner size. By default, size is 4rem.

- `loading-placeholder`

  Carousel style one stripe spinner in a white background with box shadow.
  Allow to fit the parent container.

## Usage

```html
<div>
  <action-spinner />
</div>

<div>
  <action-spinner size="2" />
</div>

<div>
  <action-spinner size="9" />
</div>

Loading... <loading-bar />

Loading... <loading-bar size="1.5" />

<div style="color:red;">
  <span style="font-size:2rem;">Validating ...</span>
  <loading-bar size="2" />
</div>

<h2>Title2 <action-spinner size="1.25" /></h2>

<uiowa-ring /> // default size = 4rem
<uiowa-ring size="2" />

<div style="height: 100px">
  <loading-placeholder />
</div>
```

```typescript
@NgModule({
  declarations: [...],
  imports: [...,
    ActionSpinner,
    LoadingBar,
    LoadingPlaceholder,
    UiowaRing], // import as needed
  providers: []
})
export class App {}
```
