const jwt = require("jsonwebtoken");
const { refTokens } = require("../controllers/controller");
const userAuth = (req, res, next) => {
  //   const authHeader = req.headers['authorization']
  const token = req.headers.authorization.split(" ")[1];
  const refToken = req.headers.refreshtoken.split(" ")[1];

  //   if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
    console.log(err);
    if (err) {
      if (refTokens.includes(refToken)) {
        jwt.verify(refToken, process.env.REFRESH_TOKEN, (err, user) => {
          const token = jwt.sign(
            { username: user.username, password: user.password },
            process.env.SECRET_TOKEN,
            {
              expiresIn: "60s",
            }
          );

          req.user = user;
          next();
        });

        return res.status(200).send({ token, refToken });
      } else {
        res.status(403).send(err);
      }
    }

    req.user = user;
    next();
  });
};

module.exports = userAuth;
