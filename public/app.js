function searchCourses() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".course");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}

function showSection(id) {
  document.querySelectorAll(".page-section").forEach(s => {
    s.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
  window.scrollTo({top: 0, behavior: "smooth"});
}

function openLogin() {
  document.getElementById("loginBox").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginBox").style.display = "none";
}
