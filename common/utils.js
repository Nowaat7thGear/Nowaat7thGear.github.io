function loadModalEventHandlers() {

  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");
  const menuItems = document.querySelectorAll('.menu-item');

  document
    .getElementById("menuItemHeaderJoinInterest")
    .addEventListener("click", openModal);

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("show");
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
    menuIcon.classList.toggle("change");
  }

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !menu.contains(event.target) &&
      !menuIcon.contains(event.target)
    ) {
      menu.classList.remove("show");
      menuIcon.style.display = "block";
      document.getElementById("menu-icon").classList.remove("change")
    }
  });
}
