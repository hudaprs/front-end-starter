'use strict'

// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html

const path = require('path')

module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`
    }
  },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform'
  }
}
