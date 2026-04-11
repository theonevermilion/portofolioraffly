function openImage(img) {
  document.getElementById("imgModal").style.display = "flex";
  document.getElementById("preview").src = img.src;
}

function closeImage() {
  document.getElementById("imgModal").style.display = "none";
}

function goToLink(url) {
  window.open(url, "_blank");
}

/* close saat klik luar */
window.onclick = function(e) {
  const modal = document.getElementById("imgModal");
  if (e.target === modal) {
    closeImage();
  }
}