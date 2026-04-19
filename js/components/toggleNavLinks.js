const toggleNavLinks = () => {
	const navWrappers = document.querySelectorAll(
		".nav-mobile__wrapper.nav-mobile__wrapper--hasdropdown",
	);

	if (navWrappers.length > 0) {
		[...navWrappers].forEach((wrapper) => {
			const link = wrapper.querySelector(".nav-mobile__link");

			if (link) {
				link.addEventListener("click", (e) => {
					e.preventDefault(); // just in case

					wrapper.classList.toggle("nav-mobile__wrapper--active");
				});
			}
		});
	}
};

export default toggleNavLinks;
