const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;

const { UserModel } = require("../models/Users");
const { verifyHash } = require("../lib/passwordUtils");

//  -------------- LOCAL STRATEGY --------------  //

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback = async (email, password, done) => {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return done(null, false);

    const isValid = await verifyHash(password, user.password, user.salt);
    if (isValid) return done(null, user);

    return done(null, false);
  } catch (error) {
    return done(error);
  }
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

//----------------------------------------------------------------//

//  -------------- GOOGLE STRATEGY --------------  //

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL } =
  process.env;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      const email = profile.emails[0].value;
      const user = await UserModel.findOne({ email });

      if (user) return done(null, user);

      const newUser = await UserModel({
        fullName: profile.displayName,
        email: email,
        password: profile.id,
      }).save();

      return done(null, newUser);
    }
  )
);

//----------------------------------------------------------------//

//  -------------- GITHUB STRATEGY --------------  //

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_CALLBACK_URL } =
  process.env;

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: GITHUB_CALLBACK_URL,
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {

      const email = profile.profileUrl;
      const user = await UserModel.findOne({ email });

      if (user) return done(null, user);

      const newUser = await UserModel({
        fullName: profile.username,
        email: email,
        password: profile.id,
      }).save();

      return done(null, newUser);
    }
  )
);

//----------------------------------------------------------------//

passport.serializeUser((user, done) => {
  return done(null, user._id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await UserModel.findById(userId);
    if (user) return done(null, user);
  } catch (error) {
    return done(error);
  }
});

module.exports = passport;
