const expree = require('express')
const path = require('path')
const app = express()
const PORT = 3000
const _path = path.join(_dirname,'/dist')
app.use(express.static(_path))
app.listen(PORT,()=>console.log(`๐We come to ์ด์๋นWorld๐)${PORT}!`))