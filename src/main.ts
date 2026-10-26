// @deno-types="./asset-url.d.ts"
import glassesUrl from "./assets/glasses.png?no-inline";
// @deno-types="./asset-url.d.ts"
import hatUrl from "./assets/hat.png?no-inline";

const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A face wearing glasses and a hat");

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);
//hat.png: hat from "Hats n Hats" asset pack from itch.io made by user Charasan
//https://charasan.itch.io/hats-n-htas/download/eyJpZCI6MjA2MTkyOSwiZXhwaXJlcyI6MTc5Mjk3ODI4MX0%3D.O%2B6py5JfHAzwEbzHDPkPB%2BA6TNY%3D
//free for personal and commercial use
const hat = document.createElementNS("http://www.w3.org/2000/svg", "image");
hat.setAttribute("href", hatUrl);
hat.setAttribute("x", "35");
hat.setAttribute("y", "0");
hat.setAttribute("width", "130");
hat.setAttribute("height", "60");
face.append(hat);

//glasses.png: glasses from "Free Pixel Glasses Pack - 4 Classic Shapes (PNG)" from itch.io made by user Merino Kobo
//https://merino-kobo.itch.io/free-pixel-glasses-pack-4-classic-shapes-png/download/eyJpZCI6MzUxOTI4NywiZXhwaXJlcyI6MTc5Mjk3ODQ4MH0%3D.DgBG0wOVtKfJ71ARGIIuXoC0%2F7o%3D
//free for personal and commercial use
const glasses = document.createElementNS("http://www.w3.org/2000/svg", "image");
glasses.setAttribute("href", glassesUrl);
glasses.setAttribute("x", "48");
glasses.setAttribute("y", "64");
glasses.setAttribute("width", "104");
glasses.setAttribute("height", "36");
face.append(glasses);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
