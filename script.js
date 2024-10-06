var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: "true",
    // markers: "false",
  },
});

tl.to(
  "#fanta",
  {
    top: "120%",
    left: "15%",
  },
  "fanta"
);

tl.to(
  "#orange-slice",
  {
    rotate: "180deg",
    top: "110%",
    left: "20%",
  },
  "fanta"
);

tl.to(
  "#orange",
  {
    width: "25%",
    top: "160%",
    right: "0%",
  },
  "fanta"
);

tl.to(
  "#leaf-branch",
  {
    rotate: "180deg",
    width: "35%",
    top: "155%",
    left: "-5%",
  },
  "fanta"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "50% 50%",
    scrub: "true",
    // markers: "true",
  },
});
tl2.to("#fanta", {
  top: "205%",
  left: "42%",
});
