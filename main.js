import { createHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { createBodies } from "./components/bodies.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("JS загружен!");

  document.body.prepend(createHeader());
  document.body.appendChild(createBodies());
  document.body.appendChild(createFooter());
});
