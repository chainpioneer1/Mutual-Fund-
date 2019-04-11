import {generate as ngGen} from './ng/src/generate'
import * as Path from 'path'
const openapi = require('openapi-client')

genAuthNg()
//genExpress()
function genAuthNg(){
    const outDir = Path.join(Path.resolve(__dirname, '../client/src/app/api'));
    const apiFile = Path.join(Path.resolve(__dirname, '../swagger/web-server/swagger-auth.json')); 
    ngGen(apiFile,outDir)
}



 async function genExpress(){
    openapi.genCode({
      src:Path.resolve(__dirname, '../web-server/swagger-auth.json'),
      outDir: Path.resolve(__dirname, '../api'),
      language: 'ts',
      redux: true
    })
    .then(complete, error)
     
    function complete(spec) {
      console.info('Service generation complete')
    }
     
    function error(e) {
      console.error(e.toString())
    }
 }
