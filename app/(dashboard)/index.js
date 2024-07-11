import Hyperwallet from "hyperwallet-sdk/src/Hyperwallet.js";

var Hyperwallet = require("hyperwallet-sdk");

var client = new Hyperwallet({
  username: "restapiuser@4917301618",
  password: "mySecurePassword!",
  programToken: "prg-645fc30d-83ed-476c-a412-32c82738a20e",
  server: "https://uat-api.paylution.com",
});

//https://uat-api.paylution.com/rest/v4/users
