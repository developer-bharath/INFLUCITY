/** Public contact email — use Gmail compose link so visitors can write from Gmail in the browser. */
export const CONTACT_EMAIL = "hello@influcity.in";

/** Opens Gmail “Compose” with To: prefilled (user must be signed into Google in the browser). */
export const CONTACT_GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=" +
  encodeURIComponent(CONTACT_EMAIL) +
  "&su=" +
  encodeURIComponent("Message from influcity.in");

export const CONTACT_MAILTO_URL = `mailto:${CONTACT_EMAIL}`;
