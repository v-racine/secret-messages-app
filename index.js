document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const messageDiv = document.querySelector("#message");
  const linkDiv = document.querySelector("#link");
  const message = document.querySelector("#message-input");
  const link = document.querySelector("#link-input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    messageDiv.classList.add("hide");
    linkDiv.classList.remove("hide");

    const encoded = btoa(unescape(encodeURIComponent(message.value)));
    link.value = `${window.location}#${encoded}`;
    link.select();
  });
});
