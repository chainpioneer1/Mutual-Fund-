
import * as Express from "express";
import * as Passport from "passport";
import {BodyParams, Controller, Get, Post, Req, Required, Res, Email, MinLength,AllowTypes, Authenticated} from  "@tsed/common";
import {Returns,Summary, Description,Docs} from "@tsed/swagger";
import {BadRequest} from "ts-httpexceptions";
import { User } from "../../shared/models/user.model";
import {UserService} from "../services/user.service";
class UserLogin {
    @Email()
    @Required()
    email: string;
   
    @Required()
    @MinLength(6)
    password: string;
}

@Controller("/auth")
@Docs('api-auth')
export class PassportCtrl {
    constructor(private userService : UserService){}

    @Returns(200, {description: "OK", type: User})
    @Summary("Summary of this route")
    @Description("Description of this route")
    @Post("/login")
    async login(@Required() @BodyParams() userLogin:UserLogin,
                @Req() request: Express.Request,
                @Res() response: Express.Response):Promise<User> {

        return new Promise<User>((resolve, reject) => {
            Passport
                .authenticate("login", (err, user: User) => {
                    if (err) {
                        reject(err);
                    }

                    request.logIn(user, (err) => {

                        if (err) {
                            reject(err);
                        } else {
                            resolve(user);
                        }
                    });

                })(request, response, () => {

                });
        });
    }


    @Returns(200, {description: "OK", type: User || null})
    @Summary("Check if is user Authenticated")
    @Description("return the user if is Authenticated and  exists in database")
   // @Authenticated()
    @Post("/isAuthenticated")
    async isAuthenticated(@Req() request: Express.Request, @Res() response :Express.Response ):Promise<User> {
        if (!request.user) response.send('')
        return this.userService.find(request.user.id);
    }

    /**
     * Disconnect user
     * @param request
     */
    @Get("/logout")
    public logout(@Req() request: Express.Request): string {
        request.logout();
        return "Disconnected";
    }
}