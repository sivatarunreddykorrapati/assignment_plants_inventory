const url = "http://localhost:3000/blogs";

function getDetails(id) {
	alert("in");
	localStorage.setItem("id", id);
}

document.addEventListener("DOMContentLoaded", (e) => {
	const galleryImages = document.querySelectorAll(".image-container img");
});
const plantDetails = [
	{
		name: "basil",
		scientificName: "Ocimum basilicum",
		imagePage: `img/basil.jpg`,
		description:
			"Basil may provide health benefits in the diet, as herbal medicine, and as an essential oil. Traditional uses include the treatment of snakebites, colds, and inflammation within nasal passages — a common effect of colds, for example. Basil provides some macronutrients, such as calcium and vitamin K, as well as a range of antioxidants.",
	},
	{
		name: "fennel",
		scientificName: "Foeniculum vulgare",
		imagePage: `img/basil.jpg`,
		description:
			"Fennel is valued for its edible shoots, leaves, and seeds12. It’s a flavorful herb used in cooking and a primary ingredient in absinthe. Additionally, its essential oil has non-food uses, including insecticidal properties3. Florence fennel (finocchio) is specifically grown for its edible leaves and leaf bases4.",
	},
	{
		name: "ginger",
		scientificName: "Zingiber officinale",
		imagePage: "img/ginger.jpg",
		description:
			"Ginger is commonly dried and ground to flavor breads, sauces, curry dishes, confections, pickles, and ginger ale. The fresh rhizome (green ginger) is also used in cooking. Additionally, ginger is used medicinally to treat flatulence and colic. Its essential oil, containing zingiberene and zingerone, is distilled from the rhizomes for use in the food and perfume industries1.",
	},
	{
		name: "eucalyptus",
		scientificName: "Eucalyptus",
		imagePage: "img/eucalyptus.jpg",
		description:
			"Eucalypti grow rapidly, with some species reaching great heights. The giant gum tree (Eucalyptus regnans) in Victoria and Tasmania can reach about 90 meters (300 feet) in height. The leaves are leathery and often hang obliquely or vertically, and most species are evergreen. The flower petals cohere to form a cap when the flower expands, and the capsule fruit contains numerous minute seeds.",
	},
	{
		name: "lavender",
		scientificName: "Lavandula",
		imagePage: "img/lavender.jpg",
		description:
			"Lavender oil, obtained by distillation of the flowers, is used in fine perfumes, cosmetics, and toiletries. Lavender is sometimes used to flavor beverages and sweets.",
	},
	{
		name: "butterfly",
		scientificName: "Stachytarpheta jamaicensis",
		imagePage: "img/butterfly.jpg",
		description:
			"This plant, especially the blue variety, attracts monarch butterflies. It’s a great choice for butterfly gardens. Overwintering is possible in colder climates, " +
			"Buddleja davidii ‘Miss Molly’: A proven winner with true red flowers, loved by butterflies. It’s more compact and reaches around 6 feet.",
	},
];
let selectedplantDetails = {};

function handleImageClick(plantName) {
	selectedplantDetails = plantDetails.filter(
		(plant) => plant.name === plantName
	)[0];
	const modal = document.querySelector("#exampleModal");
	const body = modal.querySelector(".modal-body");
	const name = modal.querySelector(".plant-name-details");
	const image = modal.querySelector(".plant-details-image");
	const scientificName = modal.querySelector(".scientific-name");
	const description = modal.querySelector(".description");
	name.innerHTML = `${selectedplantDetails.name}`;
	scientificName.innerHTML = `${selectedplantDetails.scientificName}`;
	description.innerHTML = `${selectedplantDetails.description}`;
	name.innerHTML = `${selectedplantDetails.name}`;
	image.src = selectedplantDetails.imagePage;
}
