const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenuNav = document.querySelector("#mobile-menu-nav");

function setMenuOpen(isOpen) {
	siteHeader.classList.toggle("is-open", isOpen);
	menuToggle.setAttribute("aria-expanded", String(isOpen));
	menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
	document.body.classList.toggle("menu-open", isOpen);
}

menuToggle.addEventListener("click", () => {
	const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
	setMenuOpen(isOpen);
});

mobileMenuNav.addEventListener("click", (event) => {
	if (event.target instanceof HTMLAnchorElement) {
		setMenuOpen(false);
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
		setMenuOpen(false);
		menuToggle.focus();
	}
});

window.addEventListener("resize", () => {
	if (window.innerWidth >= 768 && menuToggle.getAttribute("aria-expanded") === "true") {
		setMenuOpen(false);
	}
});
