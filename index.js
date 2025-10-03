document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.querySelector("#message-input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(input.value);
  });
});
