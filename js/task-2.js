document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");

  const markup = images
    .map(
      ({ url, alt }) => `
    <li class="gallery-li">
      <img src="${url}" alt="${alt}" width="360" height="300" />
    </li>
  `
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
});
