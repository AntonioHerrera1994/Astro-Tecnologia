document.addEventListener('DOMContentLoaded', () => {
const hacenmosanimacion1 = document.querySelector('.hacemos-izq');
const hacenmosanimacion2 = document.querySelector('.hacemos-anim-h4');
const hacenmosanimacion3 = document.querySelector('.hacemos-anim-h1');
const hacenmosanimacion4 = document.querySelector('.hacemos-anim-p');


// Observadores separados
const observer1 = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
setTimeout(() => {
hacenmosanimacion1.classList.add('visible');
}, 500); // Retraso de 1 segundo
observer1.unobserve(hacenmosanimacion1);
}
});
},
{ threshold: 0.1 }
);

const observer2 = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
setTimeout(() => {
hacenmosanimacion2.classList.add('visible');
}, 700); // Retraso de 2 segundos
observer2.unobserve(hacenmosanimacion2);
}
});
},
{ threshold: 0.1 }
);

const observer3 = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
setTimeout(() => {
hacenmosanimacion3.classList.add('visible');
}, 800); // Retraso de 2 segundos
observer3.unobserve(hacenmosanimacion3);
}
});
},
{ threshold: 0.1 }
);

const observer4 = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
setTimeout(() => {
hacenmosanimacion4.classList.add('visible');
}, 900); // Retraso de 2 segundos
observer4.unobserve(hacenmosanimacion4);
}
});
},
{ threshold: 0.1 }
);

const observer5 = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
setTimeout(() => {
hacenmosanimacion6.classList.add('visible');
}, 1000); // Retraso de 2 segundos
observer5.unobserve(hacenmosanimacion6);
}
});
},
{ threshold: 0.1 }
);

const observer6 = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
setTimeout(() => {
hacenmosanimacion5.classList.add('visible');
}, 1100); // Retraso de 2 segundos
observer6.unobserve(hacenmosanimacion5);
}
});
},
{ threshold: 0.1 }
);

observer1.observe(hacenmosanimacion1);
observer2.observe(hacenmosanimacion2);
observer3.observe(hacenmosanimacion3);
observer4.observe(hacenmosanimacion4);
observer5.observe(hacenmosanimacion5);
observer6.observe(hacenmosanimacion6);

});
