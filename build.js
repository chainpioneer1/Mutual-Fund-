var fs = require('fs')
const execSync = require('child_process').execSync;
const exec = require('child_process').exec;
start();

async function start() {
    // create swagger folders.
    try {
        console.log("npm install - start")
        execSync("npm install", { maxBuffer: 1024 * 1024, stdio: 'inherit' })
        console.log("npm install - done")

        if (!fs.existsSync('./swagger')) fs.mkdirSync('./swagger');
        if (!fs.existsSync('./swagger/web-server')) fs.mkdirSync('./swagger/web-server');
      
        console.log("web-server - start")
        execSync("node -r ts-node/register/transpile-only web-server/app exit", { maxBuffer: 1024 * 1024, stdio: 'inherit' })
        console.log("web-server - stop")
        
        console.log("codegen - start")
        execSync("npm run codegen", { maxBuffer: 1024 * 1024, stdio: 'inherit' });
        console.log("codegen - done")
       
        console.log("ng build - start")
        execSync("npm run build-client", { maxBuffer: 1024 * 1024, stdio: 'inherit' });
    }
    catch (x) {
        console.log(x)
    }
}

