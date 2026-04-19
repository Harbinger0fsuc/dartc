const addToWishlist = () => {
	const wishListButtons = document.querySelectorAll(".btn-wishlist");

	if (wishListButtons.length > 0) {
		[...wishListButtons].forEach((button) => {
			button.addEventListener("click", () => {
				button.classList.toggle("btn-wishlist--added");
			});
		});
	}
};

export default addToWishlist;
