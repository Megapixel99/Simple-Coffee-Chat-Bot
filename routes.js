const express = require("express");
const router = express.Router();
//const mongoose = require('mongoose');
//const clientSessions = require('client-sessions');

var session;

router.post("/botresponse", function(req,res) {
  if (req.body.message != undefined && req.body.message != null)
  {
    res.json({Response: BotLogic(req.body.message)});
  }
  else {
  res.json({Response: BotLogic(null)});
  }
});

router.get("/", function(req,res) {
  res.sendFile(__dirname + "/UI/HTML/main.html")
});
// Array Format: [Question, restype, res1, res2, res3...]
function BotLogic(val) {
  if (val == null || val == undefined){
  session = true;
    return ["Hello what would you like to drink?", "boolean", "Tea", "Coffee"];
  }
      if (val == "Tea"){
        return ["What type of tea would you like?", "boolean", "Iced", "Brewed"];
      }
          if (val == "Iced"){
            return ["How many sweeteners would you like?", "text"];
          }
          else if (val == "Brewed"){
            return ["How many sweeteners would you like?", "text"];
          }
    else if (val == "Coffee"){
      return ["What type of coffee would you like?", "Black", "res2"];
    }
}

module.exports = router;
