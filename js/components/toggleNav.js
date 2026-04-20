const toggleNav = () => {
	const menuToggler = document.querySelector(".menu-toggler");
	const navMobile = document.querySelector(".nav-mobile");

	if (menuToggler && navMobile) {
		menuToggler.addEventListener("click", () => {
			menuToggler.classList.toggle("menu-toggler--active");
			navMobile.classList.toggle("nav-mobile--active");
		});
	}
};

export default toggleNav;
