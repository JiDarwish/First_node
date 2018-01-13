// Singelton is something which mongoose does that allows importing mongoose once and then use it everywhere in our project
const mongoose = require("mongoose");
// Reference our module! (only one parameter)
const Store = mongoose.model("Store");

exports.homePage = (req, res) => {
  res.render("index", {
    title: "Hey"
  });
};

exports.addStore = (req, res) => {
  res.render("editStore", {
    title: "Add store"
  });
};

exports.createStore = async (req, res) => {
  const store = await new Store(req.body).save(); // like in a class -> object We have model -> DOCUMENT
  req.flash(
    "success",
    `Successfully Created ${store.name}. Care to leave a review?`
  );
  res.redirect("/");
};

// wrapping probe to errors functions in a higher order function to deal with errors
// is called composition
