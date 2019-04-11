import * as Passport from "passport";
import {Strategy} from "passport-local";
import {
    AfterRoutesInit,
    BeforeRoutesInit,
    ExpressApplication,
    Inject,
    ServerSettingsService,
    Service
} from "@tsed/common";
import {BadRequest, NotFound} from "ts-httpexceptions";
import {User} from 'shared/models/user.model';
import {UserService} from "./user.service";

@Service()
export class PassportLocalService implements BeforeRoutesInit, AfterRoutesInit {

    constructor(private usersService: UserService,
                private serverSettings: ServerSettingsService,
                @Inject(ExpressApplication) private  expressApplication: ExpressApplication) {

        // used to serialize the user for the session
        Passport.serializeUser(PassportLocalService.serialize);

        // used to deserialize the user
        Passport.deserializeUser(this.deserialize.bind(this));
    }

    $beforeRoutesInit() {
        const options: any = this.serverSettings.get("passport") || {} as any;
        const {userProperty, pauseStream} = options;

        this.expressApplication.use(Passport.initialize({userProperty}));
        this.expressApplication.use(Passport.session({pauseStream}));
    }

    $afterRoutesInit() {
        this.initializeLogin();
    }

    /**
     *
     * @param user
     * @param done
     */
    static serialize(user, done) {
        done(null, user._id);
    }

    /**
     *
     * @param id
     * @param done
     */
    public deserialize(id, done) {
        done(null, this.usersService.find(id));
    };

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
    public initializeLogin() {
        Passport.use("login", new Strategy({

            // by default, local strategy uses username and password, we will override with email
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true // allows us to pass back the entire request to the callback
        }, (req, email, password, done) => {
            this.login(email, password)
                .then((user) => done(null, user))
                .catch((err) => done(err));
        }));
    }

    /**
     *
     * @param email
     * @param password
     * @returns {Promise<boolean>}
     */
    async login(email: string, password: string): Promise<User> {
        const user = await this.usersService.findByCredential(email, password);
        if (user) {
            return user;
        }

        throw new NotFound("User not found");
    };
}