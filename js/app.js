let pagesSwipe = [...document.querySelectorAll(".switch-page")];

function slideNextPage(currentView, pagesArray) {
  pagesArray.forEach((page, pos) => {
    page.style.transform = `translateX(${100 * (pos + currentView)}%)`;
  });
}

slideNextPage(0, pagesSwipe);
