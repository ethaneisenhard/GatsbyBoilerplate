const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-blog-post-js": hot(preferDefault(require("/Users/ethan/GatsbyBoilerplate/src/components/blog-post.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ethan/GatsbyBoilerplate/src/pages/index.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ethan/GatsbyBoilerplate/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ethan/GatsbyBoilerplate/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/ethan/GatsbyBoilerplate/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/ethan/GatsbyBoilerplate/src/pages/blog.js"))),
  "component---src-pages-career-js": hot(preferDefault(require("/Users/ethan/GatsbyBoilerplate/src/pages/career.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/ethan/GatsbyBoilerplate/src/pages/contact.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/Users/ethan/GatsbyBoilerplate/src/pages/services.js")))
}

