const express = require('express')
const kubernetesClient = require('@kubernetes/client-node')
const axios = require("axios")
const app = express()
const port = 3001

app.listen(port, () => {
    console.log(`dummysite up on port ${port}`)
  })

const kubeConfig = new kubernetesClient.KubeConfig()
kubeConfig.loadFromDefault()

const watch = new kubernetesClient.Watch(kubeConfig)

let defaulturl = "https://example.com/"
let requestedUrl = ""

watch.watch('/apis/stable.dwk/v1/dummysites',
    {
        allowWatchBookmarks: true,
    },
    (type, apiObj, watchObj) => {
        if (type === 'ADDED') {
            console.log('new object:')
            const url = apiObj.spec.website_url
            const req = await axios.get(url)
            requestedUrl = req.data
        } else {
            console.log('unknown type: ' + type);
        }
        console.log(apiObj)
    },
    (err) => {
        console.log(err);
    })
.then((req) => {
    setTimeout(() => { req.abort(); }, 10 * 1000)
});
