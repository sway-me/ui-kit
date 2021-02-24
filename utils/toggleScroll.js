const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
const preventDefault = (e) => e.preventDefault();

const preventDefaultForScrollKeys = (e) => {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
};

let supportsPassive = false;
window.addEventListener(
  "setPassive",
  null,
  Object.defineProperty({}, "passive", {
    get: function () {
      supportsPassive = true;
    },
  })
);

const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

const toggleScroll = ({ enable }) => {
  const listener = enable
    ? window.removeEventListener
    : window.addEventListener;

  listener("DOMMouseScroll", preventDefault, false);
  listener(wheelEvent, preventDefault, wheelOpt);
  listener("touchmove", preventDefault, wheelOpt);
  listener("keydown", preventDefaultForScrollKeys, false);
  document.body.style.overflow = enable ? "scroll" : "hidden";
};

export default toggleScroll;
