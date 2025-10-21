(() => {
  const root = document.querySelector(".reviews");
  const viewport = root.querySelector(".reviews__viewport");
  const track = root.querySelector(".reviews__track");
  const slides = [...track.children];
  const btnPrev = root.querySelector(".prev");
  const btnNext = root.querySelector(".next");
  const btnPrevMob = root.querySelector(".prev.mob");
  const btnNextMob = root.querySelector(".next.mob");
  const dotsWrap = root.querySelector(".reviews__dots");

  let index = 0;
  let width = viewport.clientWidth;
  let autoplay = false;
  let timer = null;
  const interval = 4500;

  // точки
  const dots = slides.map((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.role = "tab";
    b.ariaLabel = `Слайд ${i + 1}`;
    b.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(b);
    return b;
  });

  function update() {
    track.style.transform = `translateX(${-index * width}px)`;
    dots.forEach((d, i) =>
      d.setAttribute("aria-selected", i === index ? "true" : "false")
    );
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    update();
    restartAutoplay();
  }

  function next() {
    goTo(index + 1);
  }
  function prev() {
    goTo(index - 1);
  }

  // resize
  window.addEventListener("resize", () => {
    width = viewport.clientWidth;
    update();
  });

  // клавиатура
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  // свайп
  let startX = 0,
    dx = 0,
    touching = false;
  viewport.addEventListener("pointerdown", (e) => {
    touching = true;
    startX = e.clientX;
    dx = 0;
    viewport.setPointerCapture(e.pointerId);
  });
  viewport.addEventListener("pointermove", (e) => {
    if (!touching) return;
    dx = e.clientX - startX;
    track.style.transition = "none";
    track.style.transform = `translateX(${-index * width + dx}px)`;
  });
  const endSwipe = () => {
    track.style.transition = "";
    if (Math.abs(dx) > width * 0.2) dx < 0 ? next() : prev();
    else update();
    touching = false;
    dx = 0;
  };
  viewport.addEventListener("pointerup", endSwipe);
  viewport.addEventListener("pointercancel", endSwipe);
  viewport.addEventListener("pointerleave", () => touching && endSwipe());

  // кнопки
  btnNext?.addEventListener("click", next);
  btnPrev?.addEventListener("click", prev);
  btnNextMob?.addEventListener("click", next);
  btnPrevMob?.addEventListener("click", prev);

  // авто-прокрутка (пауза при наведении/фокусе)
  function startAutoplay() {
    if (!autoplay) return;
    stopAutoplay();
    timer = setInterval(next, interval);
  }
  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }
  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  root.addEventListener("mouseenter", stopAutoplay);
  root.addEventListener("mouseleave", startAutoplay);
  root.addEventListener("focusin", stopAutoplay);
  root.addEventListener("focusout", startAutoplay);

  // init
  update();
  startAutoplay();
})();
