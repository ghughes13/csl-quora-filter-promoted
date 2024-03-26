function hidePromotedPosts() {
  document
    .querySelectorAll("[data-adclicklocation='background']")
    .forEach((element) => {
      if (element.id.length > 50) {
        element.style = "display: none";
      }
    });
}

const resizeObserver = new ResizeObserver(() => {
  hidePromotedPosts();
});

resizeObserver.observe(document.body);
