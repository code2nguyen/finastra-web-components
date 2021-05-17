## Local Development

```sh
# install dependencies
yarn

# (persistent) build style source files on change
yarn watch:styling

# another terminal (persistent) build tsc source files on change
yarn watch:typescript <package path> # e.g. ./packages/uxg-components/button/

# another terminal (persistent) start dev server
yarn serve

# another terminal (persistent) - test all or specific packages
yarn test --autoWatch --packages <(optional) comma separated package names> # e.g. uxg-components/product-card,uxg-components/button

# another terminal (persistent) - debug tests
yarn test:debug --autoWatch --packages <comma separated package names> # e.g. uxg-components/product-card,uxg-components/button
```
