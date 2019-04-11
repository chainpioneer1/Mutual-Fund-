import "@tsed/servestatic";
import "@tsed/swagger";
import { ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware } from "@tsed/common";
import Path = require("path");
const rootDir = Path.resolve(__dirname)
const clientFolder = Path.resolve(__dirname, '../client/dist');
const swaggerFolder = Path.resolve(__dirname, '../swagger/web-server/');
@ServerSettings({
    rootDir: rootDir, 
    acceptMimes: ["application/json"],
    serveStatic: {
        "/": clientFolder
    },
    debug: true,
    passport: {},
    swagger: [
        {
            doc: 'api-auth',
            path: "/api-docs-auth",
            outFile: swaggerFolder + "/swagger-auth.json",
            hidden:false
        }
    ],

    httpPort:2222,
    httpsPort:3333
})
export class Server extends ServerLoader {

    /**
     * This method let you configure the middleware required by your application to works.
     * @returns {Server}
     */
    public $onMountingMiddlewares(): void | Promise<any> {
        const cookieParser = require('cookie-parser'),
            bodyParser = require('body-parser'),
            compress = require('compression'),
            methodOverride = require('method-override'),
            session = require("express-session"),
            passport = require('passport')

        this
            .use(GlobalAcceptMimesMiddleware)
            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({ extended: true})) 
             // Configure session used by Passport
             .use(session({
                secret: "mysecretkey",
                resave: true,
                saveUninitialized: true,
                maxAge: 36000,
                cookie: {
                    path: "/",
                    httpOnly: true,
                    secure: false,
                    maxAge: null
                }
            }));
        return null;
    }

    public $onReady() {
        this.expressApp.get("/*", function (req, res, next) {
            return res.sendFile(clientFolder + '/index.html');
        })
        if (process.argv.find(arg => arg == 'exit'))
            process.exit()

        console.log('Server started...');
    }

    public $onServerInitError(err) {
        console.error(err);
    }
}

new Server().start();