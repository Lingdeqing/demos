const hello = require("test-mod1")
const axios = require("axios")

hello('lerna')

axios.get(hello.API).then((res) => console.log(res.data.length));

