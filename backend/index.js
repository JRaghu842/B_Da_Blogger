let express = require("express");
let cors = require("cors");
let { mongoose } = require("mongoose");
let User = require("./models/User");
let bcrypt = require("bcryptjs");
let app = express();
let jwt = require("jsonwebtoken");
let cookieParser = require("cookie-parser");

let salt = bcrypt.genSaltSync(10);
let secret = "asasdawdvcxvkjbc444nknmxdrgsrg";

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://raghavendra:raghujingade@cluster0.5bx22xa.mongodb.net/B_Da_Blogger?retryWrites=true&w=majority"
);
app.post("/register", async (req, res) => {
  try {
    let { username, password } = req.body;

    // Check if the username already exists
    let existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Create a new user
    let userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });

    res.json(userDoc);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    let { username, password } = req.body;

    // Find the user by username
    let userDoc = await User.findOne({ username });

    if (!userDoc) {
      return res.status(400).json({ message: "User not found" });
    }

    let passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
      // Generate a JWT token
      jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          message: "Logged in successfully",
          id: userDoc._id,
          username,
        });
      });
    } else {
      res.status(400).json({ message: "Wrong credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/profile", (req, res) => {
  let { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.listen(4000, () => {
  try {
    console.log("Server is live at port 4000");
  } catch (error) {
    console.log(error);
  }
});
