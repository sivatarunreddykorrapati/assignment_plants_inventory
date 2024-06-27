let productsArr = [
	{
		id: 1,
		name: "Test plant 1",
		country: "India",
		availibilty: 1,
		uses: "uses here",
	},
];

let count = 0;

let product = {
	name: null,
	country: null,
	availibilty: 0,
	uses: null,
};

let isEdit = false;
let selectedId = null;

function getInfo() {
	product.name = document.getElementById("plantname").value;
	let e = document.getElementById("countrySelect");
	if (e.selectedIndex === 0) {
		product.country = "";
	} else {
		product.country = e.options[e.selectedIndex].text;
	}
	product.availibilty = document.getElementById("count").value;
	product.uses = document.getElementById("uses").value;
}

function render(productsArr) {
	const table = document.getElementById("result");
	table.innerHTML = "";
	for (let product of productsArr) {
		const tr = document.createElement("tr");
		const name = document.createElement("td");
		const country = document.createElement("td");
		const availibilty = document.createElement("td");
		const uses = document.createElement("td");
		const action = document.createElement("td");
		const editBtn = document.createElement("button");
		editBtn.innerHTML = "EDIT";
		editBtn.classList.add("btn");
		editBtn.id = "edit";
		editBtn.dataset.productId = product.id;
		editBtn.classList.add("btn-success");
		const deleteBtn = document.createElement("button");
		deleteBtn.innerHTML = "DELETE";
		deleteBtn.classList.add("btn");
		deleteBtn.classList.add("btn-danger");
		deleteBtn.id = "delete";
		deleteBtn.dataset.productId = product.id;
		name.innerHTML = product.name;
		country.innerHTML = product.country;
		availibilty.innerHTML = product.availibilty;
		uses.innerHTML = product.uses;
		tr.append(name);
		tr.append(country);
		tr.append(availibilty);
		tr.append(uses);
		action.append(editBtn);
		action.append(deleteBtn);
		tr.append(action);
		table.append(tr);
	}
}

function handleClickEventsInTable(e) {
	const elementId = e.target.id;
	const productId = e.target.dataset.productId;
	if (elementId === "edit") {
		handleEditButton(Number(productId));
	} else if (elementId === "delete") {
		handleDeleteButton(Number(productId));
	}
	render(productsArr);
}

function handleDeleteButton(id) {
	productsArr = productsArr.filter((productItem) => productItem.id !== id);
	resetValues();
}

function handleEditButton(id) {
	const selectedProduct = productsArr.filter(
		(product) => product.id === id
	)[0];
	editData(selectedProduct);
	isEdit = true;
	selectedId = id;
}

function editData(product) {
	document.getElementById("plantname").value = product.name;
	const selelctIndex = countryOptions.findIndex(
		(country) => country === product.country
	);
	document.getElementById("countrySelect").selectedIndex = selelctIndex + 1;
	document.getElementById("count").value = product.availibilty;
	document.getElementById("uses").value = product.uses;
}
function deleteData(product) {
	productsArr.pop(product);
}

function resetValues() {
	document.getElementById("plantname").value = "";
	document.getElementById("countrySelect").value = "";
	document.getElementById("count").value = "";
	document.getElementById("uses").value = "";
	isEdit = false;
}
function pushIt() {
	if (isEdit) {
		getInfo();
		productsArr = productsArr.map((productItem) => {
			return productItem.id === selectedId
				? {
						...product,
						id: count++,
				  }
				: productItem;
		});
		isEdit = false;
		selectedId = null;
	} else {
		getInfo();
		productsArr.push({
			...product,
			id: count++,
		});
	}
	product = {
		name: null,
		country: null,
		availibilty: null,
		uses: null,
	};
	render(productsArr);
	resetValues();
}

function validateForm() {
	getInfo();
	for (let key of Object.keys(product)) {
		if (!!!product[key]) {
			console.log(key);
			alert(`Enter valid details for "${key}" field`);
			return;
		}
	}
}

function sortByCount() {
	productsArr.sort(
		(a, b) => parseFloat(a.availibilty) - parseFloat(b.availibilty)
	);
}

render(productsArr);
const table = document.getElementById("result");
table.onclick = handleClickEventsInTable;
let form = document.getElementById("formId");
function submitForm(event) {
	event.preventDefault();
	pushIt();
}
form.addEventListener("submit", submitForm);
