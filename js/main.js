//rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second.
gsap.to(".box", {rotation: 150, scaleX: 1.5, scaleY: 2, x: 400, y: 300, duration: 2});
