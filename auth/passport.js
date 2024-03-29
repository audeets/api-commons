import passport from 'passport';

export const init = () => {
  passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
      cb(null, { id: user.id, projectsMax: user.projectsMax });
    });
  });

  passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, user);
    });
  });
};
