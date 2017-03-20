// require.context(directory, useSubdirectories = false, regExp = /^\.\//)
let context = require.context('.', true, /-test.js$/);
context.keys().forEach(context);
