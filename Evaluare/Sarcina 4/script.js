window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("calculeaza-media");
  button.addEventListener("click", () => {
    const x = parseInt(document.getElementById("x").value);
    const y = parseInt(document.getElementById("y").value);
    const media = (x + y) / 2;
    document.getElementById("media").innerHTML = `Media este: ${media}`;
  });
});
