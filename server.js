const botCluster = require('botcluster')

botCluster.Server({
  application: {
    secret: 41,
    modulesDirectory: __dirname
  }
}).catch(err => {
  console.error('[general-error]', err)
  process.exit(1)
})
