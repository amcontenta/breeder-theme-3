var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("home", {
    layout: "wrapper",
    template: "home",
    title: "Breeder Theme 1",
    isHome: true,
  });
});

router.get("/adopt", function (req, res, next) {
  res.render("adopt", {
    layout: "wrapper",
    template: "adopt",
    title: "Adopt",
    isAdopt: true,
  });
});

router.get("/faq", function (req, res, next) {
  res.render("faq", {
    layout: "wrapper",
    template: "faq",
    title: "FAQ",
  });
});

router.get("/supplylist", function (req, res, next) {
  res.render("supplylist", {
    layout: "wrapper",
    template: "supplylist",
    title: "Supply List",
  });
});

router.get("/futurelitters", function (req, res, next) {
  res.render("futurelitters", {
    layout: "wrapper",
    template: "futurelitters",
    title: "Future Litters",
  });
});

router.get("/pastlitters", function (req, res, next) {
  res.render("pastlitters", {
    layout: "wrapper",
    template: "pastlitters",
    title: "Past Litters",
  });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", {
    layout: "wrapper",
    template: "contact",
    title: "Contact",
    isContact: true,
  });
});

router.get("/parents", function (req, res, next) {
  res.render("parents", {
    layout: "wrapper",
    template: "parents",
    title: "Parents",
    isContact: true,
  });
});

module.exports = router;
