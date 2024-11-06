//

const express = require("express");
const app = express();
let users = []

app.use(express.json());
const generateToken = () => {
  const options = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];

  let token = "";
  for (let i = 0; i < 32; i++) {
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
};

const signUpHandler = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (users.find(u => u.username == username)) {
    res.json({ message: "you are already signed up" })
  }
  else {
    users.push({
      username: username,
      password: password,
    })
    res.json({
      message: "you are signed in succesfully "
    })
  }
  console.log(users);
}
const signingHandler = (req, res) => {
  const { username, password } = req.body;
  const user_signing = users.find(u => u.username == username && u.password == password);
  if (user_signing) {
    const token = generateToken();
    user_signing.token = token;
    res.json({ msg: "SignIN Succesful", token: `${token} :-> ${username}` })
  }
  else {
    res.status(403).json({ msg: "invalid username or password" })
  }
  console.log(users);
}
const mehandler = (req, res) => {
  // let user_verfication = undefined;
  const token = req.headers.token;
  const user_verfication = users.find(u => u.token == token);
  if (user_verfication) {
    res.json({
      MSG: "you are verified, here is your cred",
      username: user_verfication.username,
      password:user_verfication.password,
    })
  }
  else {
    res.status(401).send({
      message: "Unauthorized"
    })
  }
}
app.post("/signup", signUpHandler);
app.post("/signin", signingHandler);
app.get("/me", mehandler);
app.listen(3000);
