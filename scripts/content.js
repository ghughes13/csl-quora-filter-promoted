function hidePromotedAnswers() {
  const els = document.querySelectorAll(".dom_annotate_ad_promoted_answer");

  console.log(els);
  if (els.length > 0) {
    els.forEach((element) => {
      element.style = "display: none";
    });
  } else {
    setTimeout(hidePromotedAnswers, 500);
  }
}

function hidePromotedAds() {
  const els = document.querySelectorAll(".dom_annotate_ad_image_ad");

  console.log(els);
  if (els.length > 0) {
    els.forEach((element) => {
      element.style = "display: none";
    });
  } else {
    setTimeout(hidePromotedAds, 500);
  }
}

const resizeObserver = new ResizeObserver(() => {
  hidePromotedAnswers();
  hidePromotedAds();
});

window.addEventListener("load", function () {
  hidePromotedAds();
  hidePromotedAnswers();
});

resizeObserver.observe(document.body);
