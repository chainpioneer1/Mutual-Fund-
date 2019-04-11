import {OverrideMiddleware, AuthenticatedMiddleware, EndpointInfo, IMiddleware, Request, Next, EndpointMetadata} from "@tsed/common";
import {Forbidden} from "ts-httpexceptions";
import * as Express from "express";
@OverrideMiddleware(AuthenticatedMiddleware)
export class MyAuthenticatedMiddleware implements IMiddleware {
    public use(@EndpointInfo() endpoint: EndpointMetadata,
               @Request() request:any,// Express.Request,
               @Next() next: Express.NextFunction) { // next is optional here

        // options given to the @Authenticated decorator
        const options = endpoint.get(AuthenticatedMiddleware) || {};
        // options => {role: 'admin'}

        if (!request.isAuthenticated()) { // passport.js
          throw new Forbidden("Forbidden")  
        }

        next();
    }
}