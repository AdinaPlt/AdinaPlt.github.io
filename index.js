function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showHome() {
  hide("skills");
  hide("projects");
  hide("languages");

  var page = document.getElementById("home");
  page.style.display = "block";
}

function showSkills() {
  hide("home");
  hide("projects");
  hide("languages");

  var page = document.getElementById("skills");
  page.style.display = "block";
}

function showProjects() {
  hide("home").style.display = "none";
  hide("skills").style.display = "none";
  hide("languages").style.display = "none";

  var page = document.getElementById("projects");
  page.style.display = "block";
}

function showLanguages() {
  hide("home");
  hide("skills");
  hide("projects");

  var page = document.getElementById("languages");
  page.style.display = "block";
}

function showContact() {
  hide("home");
  hide("skills");
  hide("project");

  var page = document.getElementById("contact");
  page.style.display = "block";
}
