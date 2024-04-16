function hasUnhiddenElements(els) {
  const unhiddenEls = Array.from(els).some((el) => el.style.display !== "none");
  return unhiddenEls;
}

function hidePromotedAnswers() {
  const els = document.querySelectorAll(".dom_annotate_ad_promoted_answer");

  if (els.length > 0 && hasUnhiddenElements(els)) {
    els.forEach((element) => {
      element.style = "display: none";
    });
  } else {
    setTimeout(hidePromotedAnswers, 500);
  }
}

function hidePromotedAds() {
  const els = document.querySelectorAll(".dom_annotate_ad_image_ad");

  if (els.length > 0 && hasUnhiddenElements(els)) {
    els.forEach((element) => {
      element.style = "display: none";
    });
  } else {
    setTimeout(hidePromotedAds, 500);
  }
}

function hidePromotedGoogleAds() {
  const els = document.querySelectorAll(
    ".q-text.qu-dynamicFontSize--small.qu-color--gray_light"
  );

  if (els.length > 0 && hasUnhiddenElements(els)) {
    els.forEach((element) => {
      element.parentElement.parentElement.parentElement.style = "display: none";
    });
  } else {
    setTimeout(hidePromotedGoogleAds, 500);
  }
}

function hidePromotedGoogleAdsSidebar() {
  const els = document.querySelectorAll(
    ".q-text.qu-dynamicFontSize--tiny.qu-color--gray_light"
  );

  if (els.length > 0 && hasUnhiddenElements(els)) {
    els.forEach((element) => {
      element.parentElement.parentElement.parentElement.style = "display: none";
    });
  } else {
    setTimeout(hidePromotedGoogleAdsSidebar, 500);
  }
}

const resizeObserver = new ResizeObserver(() => {
  console.log("resized");
  hidePromotedAnswers();
  hidePromotedAds();
  hidePromotedGoogleAds();
  hidePromotedGoogleAdsSidebar();
});

window.addEventListener("load", function () {
  hidePromotedAds();
  hidePromotedAnswers();
  hidePromotedGoogleAds();
  hidePromotedGoogleAdsSidebar();
});

resizeObserver.observe(document.querySelector("#root"));
