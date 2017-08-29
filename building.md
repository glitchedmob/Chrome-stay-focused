# Compiling source code
This extension is written in Typescript, so the source code must be compiled into javascript.

To compile, run the command `npm run dev`. To watch files for changes and automatically compile when there are changes use the command `npm run watch`

# Building for distribution
We use the crx npm package to handle the building of the extension. Just run the command `npm run build` to pack the extension. (You must have a copy of the `key.pem` file in the `dist/` folder to run this command. Email me at me@levizitting.com and I can discuss giving you a copy of the key)