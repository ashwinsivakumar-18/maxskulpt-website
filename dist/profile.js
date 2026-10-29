// A gentle 3D tilt on pointer devices. Touch and reduced-motion users get a static card.
const card = document.getElementById('profile-card');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const reset = () => {
  card.style.setProperty('--rx', '0deg');
  card.style.setProperty('--ry', '0deg');
};
card.addEventListener('pointermove', (event) => {
  if (motion.matches || !pointer.matches) return;
  const bounds = card.getBoundingClientRect();
  const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
  const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
  card.style.setProperty('--rx', `${-y * 5}deg`);
  card.style.setProperty('--ry', `${x * 7}deg`);
});
card.addEventListener('pointerleave', reset);
motion.addEventListener('change', reset);
pointer.addEventListener('change', reset);
