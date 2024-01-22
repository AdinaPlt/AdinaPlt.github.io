//variabile publice
var activePage = "skills";

//functii publice
function $(selector) {
  console.info("gaseste elementul: %o", selector);

  var el = document.querySelector(selector);
  //console.info("%o found: ", selector, el);
  return el;
}

function hide(id) {
  console.info("hide", id);
  $("#" + id).style.display = "none";
}

function show(id) {
  console.info("show", id);
  var page = $(`#${id}`);
  console.debug("show page", page);
  page.style.display = "block";
}

function showPage(id) {
  console.info("show page", id);
  var prevLink = $("a[data-page=" + activePage + "]");
  prevLink.classList.remove("active");
  hide(activePage);

  var nextLink = $(`a[data-page=${id}]`);
  nextLink.classList.add("active");
  show(id);
  activePage = id;
}

//exercitii

function initEvents() {
  var toolbar = $("#top-menu-bar");

  toolbar.addEventListener("click", function (e) {
    if (e.target.matches("a")) {
      var page = e.target.dataset.page;
      console.warn("click", page);
      showPage(page);
    }
  });
}

function showSkills(skills) {
  console.info("skills: ", skills);
  var ul = $("#skills ul");

  var text = skills.map(function (skill) {
    var cls = "";
    if (skill.favorite == true) {
      cls = "favorite";
    }

    console.info("inside %o map ", skill.name, cls);
    return `<li class="${cls}">${skill.name}<span>-${skill.endorcements}</span></li>`;
  });
  console.warn(text);
  ul.innerHTML = text.join("");
}

function loadSkills() {
  var promise = fetch("skills.json");
  promise.then(function (r) {
    const jsonPromise = r.json();
    jsonPromise.then(function (skills) {
      showSkills(skills);
    });
  });
}

//executii
showPage(activePage);
initEvents();
loadSkills();
