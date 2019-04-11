

// export class User{
//     _id?: string;
//     firstName: string;
//     lastName: string;
//     email: string;

// }

//import {Any, JsonProperty, PropertyType, Required,MaxLength, MinLength, Email} from "../../web-server/node_modules/@tsed/common";
import {ObjectType, ArgsType, Field} from "../../data-server/type-graphql";
import { MaxLength, MinLength, Length, IsEmail, IsNotEmpty} from "class-validator";

@ObjectType()
@ArgsType()
export class User {
    @Length(10, 20)
    @Field()
    _id?: string;
    @Field()
    @Length(10, 20)
    firstName: string;
    @Field()
    @Length(10, 20)
    lastName: string;
    password?: string;
    email: string;
}

export class loginParams{
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password:string;
}