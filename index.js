function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  page.style.display = "block";
  console.info("show page", page);
}

function showHome() {
  hide("skills");
  hide("projects");
  hide("languages");

  show("home");

  var page = document.getElementById("home");
  page.style.display = "block";
}

function showSkills() {
  hide("home");
  hide("projects");
  hide("languages");

  show("skills");

  var page = document.getElementById("skills");
  page.style.display = "block";
}

function showProjects() {
  hide("home");
  hide("skills");
  hide("languages");

  show("projects");

  var page = document.getElementById("projects");
  page.style.display = "block";
}

function showLanguages() {
  hide("home");
  hide("skills");
  hide("projects");

  show("languages");

  var page = document.getElementById("languages");
  page.style.display = "block";
}
