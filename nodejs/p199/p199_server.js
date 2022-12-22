const expree = require('express')
const path = require('path')
const app = express()
const PORT = 3000
const _path = path.join(_dirname,'/dist')
app.use(express.static(_path))
app.listen(PORT,()=>console.log(`🔊We come to 이시빈World🎈)${PORT}!`))