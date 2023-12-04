var activePage = "projects";

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.info("show", id);
  var page = document.getElementById(id);
  console.debug("show page", page);
  page.style.display = "block";
}

function showHome() {
  hide(activePage);
  show("home");
  activePage = "home";

  var page = document.getElementById("home");
  page.style.display = "block";
}

function showSkills() {
  hide(activePage);
  show("skills");
  activePage = "skills";

  var page = document.getElementById("skills");
  page.style.display = "block";
}

function showProjects() {
  hide(activePage);
  show("projects");
  activePage = "projects";

  var page = document.getElementById("projects");
  page.style.display = "block";
}

function showLanguages() {
  hide(activePage);
  show("languages");
  activePage = "languages";

  var page = document.getElementById("languages");
  page.style.display = "block";
}
