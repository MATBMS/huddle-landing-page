/* ──────────────────────────────────────────
   Register → "community full" notification.
   Clicking Register shows a transient toast in the
   top-right, then auto-hides after 5s (feat-01).
   ────────────────────────────────────────── */

const MESSAGE =
  "The community is full for the moment, but thank you for your interest.";
const VISIBLE_DURATION = 5000; // ms — how long the toast stays on screen.

const registerButton = document.querySelector(".button");
const notification = document.querySelector(".notification");
const notificationText = document.querySelector(".notification__text");

let hideTimer;

function showNotification() {
  // Write the text on each show so the role="status" live region
  // re-announces the message to screen readers when it appears.
  notificationText.textContent = MESSAGE;
  notification.classList.add("notification--visible");

  // Restart the countdown so repeated clicks reset the 5s timer
  // instead of stacking popups or cutting the time short.
  clearTimeout(hideTimer);
  hideTimer = setTimeout(hideNotification, VISIBLE_DURATION);
}

function hideNotification() {
  notification.classList.remove("notification--visible");
}

registerButton.addEventListener("click", (event) => {
  event.preventDefault(); // href="#" is a placeholder — don't jump the page.
  showNotification();
});
