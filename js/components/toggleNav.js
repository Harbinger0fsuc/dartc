const toggleNav = () => {
	const menuToggler = document.querySelector(".menu-toggler");
	const navMobile = document.querySelector(".nav-mobile");

	if (menuToggler && navMobile) {
		menuToggler.addEventListener("click", () => {
			navMobile.classList.toggle("nav-mobile--active");
		});
	}
};

export default toggleNav;
