document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const messageDiv = document.querySelector("#message");
  const linkDiv = document.querySelector("#link");
  const showDiv = document.querySelector("#message-show");
  const message = document.querySelector("#message-input");
  const link = document.querySelector("#link-input");
  const h1 = document.querySelector("h1");

  const { hash } = window.location;
  const secretMessage = atob(hash.replace("#", ""));

  if (secretMessage) {
    messageDiv.classList.add("hide");
    showDiv.classList.remove("hide");
    h1.textContent = secretMessage;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    messageDiv.classList.add("hide");
    linkDiv.classList.remove("hide");

    const encoded = btoa(unescape(encodeURIComponent(message.value)));
    link.value = `${window.location}#${encoded}`;
    link.select();
  });
});
