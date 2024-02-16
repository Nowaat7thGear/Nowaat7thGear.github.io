function loadModalEventHandlers() {

  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");
  const menuItems = document.querySelectorAll('.menu-item');
  const menuClose = document.getElementById("menu-close");
  document
    .getElementById("menuItemHeaderJoinInterest")
    .addEventListener("click", openModal);

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("show");
    toggleMenuIcon();
  });
  menuClose.addEventListener("click", function () {
    menu.classList.remove("show");
    toggleMenuIcon();
  });

  // Loop through each menu item and attach an event listener
  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
      menu.classList.remove("show");
      toggleMenuIcon();
    });
  });

  function toggleMenuIcon() {
    menuIcon.style.display = menu.classList.contains("show")
      ? "none"
      : "block";
    menuClose.style.display = menu.classList.contains("show")
      ? "block"
      : "none";
  }

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !menu.contains(event.target) &&
      !menuIcon.contains(event.target)
    ) {
      menu.classList.remove("show");
      menuIcon.style.display = "block";
      menuClose.style.display = "none";
    }
  });
}