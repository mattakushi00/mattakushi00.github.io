document.addEventListener("DOMContentLoaded", () => {
  const all = document.querySelectorAll(".accordion details");

  all.forEach((d) => {
    d.addEventListener("toggle", () => {
      if (d.open) {
        all.forEach((other) => {
          if (other !== d) other.open = false;
        });
      }
    });
  });
});
