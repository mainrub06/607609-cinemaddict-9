export const createElement = function (element) {
  const point = document.createElement(`template`);
  point.innerHTML = element;
  return point.content;
};

export const removeElement = function (element) {
  document.querySelector(element).remove();
};
