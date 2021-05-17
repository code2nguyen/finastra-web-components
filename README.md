## Local Development

First, `install` dependencies, then you need to `build` or start `watch mode` to compile code.

Next step you can:

- Start Dev Server
- Start Storybook server

```
// Install
# yarn

// Build
yarn build

```

### Watch mode

```
# yarn watch:styling
# yarn watch:ts
```

## Storybook server

```
# yarn storybook
```

## Dev server

```
# yarn serve
```

## Testing

# another terminal (persistent) - test all or specific packages
yarn test --autoWatch --packages <(optional) comma separated package names> # e.g. uxg-components/product-card,uxg-components/button

# another terminal (persistent) - debug tests
yarn test:debug --autoWatch --packages <comma separated package names> # e.g. uxg-components/product-card,uxg-components/button

