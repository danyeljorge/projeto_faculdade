gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  scrollTrigger: ".box", // start animation when ".box" enters the viewport
  x: 200,
});
