import {Controller, Get, PathParams,QueryParams,Post, BodyParams, } from "@tsed/common";
import {Summary, Description, Responses,Deprecated, Security,} from "@tsed/swagger";
import { OpenApiModelSchemaBuilder } from "@tsed/swagger/lib/class/OpenApiModelSchemaBuilder"
import * as Express from "express";
import { User } from "../../shared/models/user.model";

@Controller("/funds")
export class FundCtrl {
    @Get("")
    async get():Promise<User[]>{     
        return [{ _id:"1", email:"asdasd",firstName:"zxczxC",lastName:"cxzas",password:"fdsadf"}];
    }

    @Post('/save')
    post(@BodyParams('user')user : User):  number{
        return 1
    }
}