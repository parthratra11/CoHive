function toggleExtraInfo(button) {
  const card = button.closest(".howItWorkscards");
  const extraInfo = card.querySelector(".extrainfo");

  if (extraInfo.style.display === "none") {
    extraInfo.style.display = "block";
    card.classList.add("active");
  } else {
    extraInfo.style.display = "none";
    card.classList.remove("active");
  }
}
