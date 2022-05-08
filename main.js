'use strict';

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const img = document.querySelector('.img');
const message = document.querySelector('.message');
const coordinate = document.querySelector('.coordinate');

const windowHalfInnerWidth = window.innerWidth / 2;
const windowHalfInnerHeight = window.innerHeight / 2;

addEventListener('load', () => {
  const imgRect = img.getBoundingClientRect();
  const imgHalfWidth = imgRect.width / 2;
  const imgHalfHeight = imgRect.height / 2;

  document.addEventListener('mousemove', (event) => {
    const X = event.clientX;
    const Y = event.clientY;

    horizontal.style.transform = `translateY(${Y - windowHalfInnerHeight}px)`;
    vertical.style.transform = `translateX(${X - windowHalfInnerWidth}px)`;
    img.style.transform = `translate(${
      X - windowHalfInnerWidth - imgHalfWidth
    }px, ${Y - windowHalfInnerHeight - imgHalfHeight}px)`;
    message.style.transform = `translate(${X - windowHalfInnerWidth + 20}px, ${
      Y - windowHalfInnerHeight + 20
    }px)`;
    coordinate.textContent = `👉    ${X}px, ${Y}px`;
  });
});
