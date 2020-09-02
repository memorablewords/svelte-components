Svelte Components
=================

[![Build Status](https://travis-ci.org/memorablewords/svelte-components.svg?branch=main)](https://travis-ci.org/memorablewords/svelte-components)
![Dependabot Status](https://github.com/memorablewords/svelte-components/workflows/Auto%20merge%20Dependabot%20updates/badge.svg)

A library of Svelte component maintained by [Memorable Words][mw].

  [mw]: https://github.com/memorablewords

## Usage

## Using components

https://github.com/rollup/rollup-plugin-svelte#pkgsvelte

**Tip:** if you are a developer of the _component library,_ then you can install it _once_ as **devDependencies** to app with `npm i -D <path-to-svelte-components>`, all change will appear immediately if you use livereload in app.

Import _component library_ into your app in `App.svelte` :

```html
<script>
    import { ByeBye, Hello } from "memorablewords-svelte-components";
    export let name
</script>

<Hello {name} />
<ByeBye {name} />
```

### Example

The [Memorable Words app][app] was set up to use this library.

  [app]: https://github.com/memorablewords/app

## Development

### Browsing the library

```sh
# Install the dependencies
npm install
# Run a local server
npm run dev
```

The local server:

-   **builds components on change**
-   **serves** from the `public/` directory at http://localhost:5000
-   **handles livereload**

### Running the test suite

```sh
# Install the dependencies
npm install
# Run the local server (required on port 5000)
npm run dev
# Run the test suite
npm test
```

For changing the view of the test page use [public/global.css](./public/global.css) and [public/index.html](./public/index.html)

### Adding components

1. Add your component's code to [src/](./src/) as directory, e.g.: [src/HelloComponent/](./src/HelloComponent/) (or add your component directly to [src/](./src/)).

2. Export the new component to apps in [src/index.js](./src/index.js)

3. [src/test.js](./src/test.js) and [src/App.svelte](./src/App.svelte) are for testing purposes:

-   add component to the [src/App.svelte](./src/App.svelte)
-   add component's properties to [src/test.js](./src/test.js)

4. Create your test cases to your component:

-   add tests to [test/](./test/) directory

### References

Do you like what you see? You can make your own using this [repository template](https://github.com/patoi/svelte-component-library-template)!


-   `svelte` https://svelte.dev
-   `nightwatch` for testing: https://nightwatchjs.org
-   `eslint` and `prettier` for formatting and linting
-   `rollupjs` for bundling: https://rollupjs.org
