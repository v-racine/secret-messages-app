document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const messageDiv = document.querySelector("#message");
  const linkDiv = document.querySelector("#link");
  const showDiv = document.querySelector("#message-show");
  const message = document.querySelector("#message-input");
  const link = document.querySelector("#link-input");
  const h1 = document.querySelector("#message-show h1");

  const { hash } = window.location;
  const messageHash = hash.replace("#", "");

  if (messageHash) {
    messageDiv.classList.add("hide");
    showDiv.classList.remove("hide");
    try {
      const decoded = atob(messageHash);
      const secretMessage = decodeURIComponent(escape(decoded));
      h1.textContent = secretMessage;
    } catch (err) {
      h1.textContent = "Invalid secret message";
      console.error(err);
    }
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
