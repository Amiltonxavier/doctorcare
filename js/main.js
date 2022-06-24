window.addEventListener("scroll", OnScroll);

onScroll();
function OnScroll() {
  showNavOnScroll();
  showBackToTopButtonScroll();
  activeteMenuAtCurrentSection(home);
  activeteMenuAtCurrentSection(about);
  activeteMenuAtCurrentSection(contact);
  activeteMenuAtCurrentSection(services);
}

function activeteMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2;
  //verificar se a sessão passou da linha
  //O top da sessão
  const sectionTop = section.offsetTop;
  //altura da sessão
  const sectionHeight = section.offsetHeight;

  //sectionTopReachOrPassedTargetline = o topo da sessão chegou ou passou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

  //verificar se a base está a baixo da linha imaginaria ou linha alvo

  const sectionEndsAt = sectionTop + sectionHeight;
  // O final da sessão passou da linha alvo
  const sectionEndPassesTargetline = sectionEndsAt <= targetLine;

  //limites da sessão sessão
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassesTargetline;

  //console.log("o fundo da sessão passou a linha", sectionBoundaries);

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
  menu.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  if (scrollY > 80) {
    navigation.classList.add("scroll");
  } else {
    document.getElementById("navigation").classList.remove("scroll");
  }
}

function showBackToTopButtonScroll() {
  if (scrollY > 400) {
    backTopButton.classList.add("show");
  } else {
    document.getElementById("backTopButton").classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  durantion: 5000,
}).reveal(`#home, 
#home img,
#home .stats,
#services, #services header, #services .card,
#about, #about header, #about .content`);
