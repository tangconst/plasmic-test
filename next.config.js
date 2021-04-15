
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['t947U6qKqqws6aPz9tjWfp'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  