# LitElement TypeScript starter 

This project includes a sample component using LitElement with TypeScript.

## Setup

Install dependencies:

```bash
npm i
```

## Build

This sample uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of your component:

```bash
npm run build
```

To watch files and rebuild when the files are modified, run the following command in a separate shell:

```bash
npm run build:watch
```

Both the TypeScript compiler and lit-analyzer are configured to be very strict. You may want to change `tsconfig.json` to make them less strict.

## Testing

This sample uses Web Test Runner and open-wc test helpers for testing. See the open-wc testing documentation or Web Test Runner documentation for more information.