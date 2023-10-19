function scrollToElement(elementSelector, instance = 0) {
	// Select all elements that match the given selector
	const elements = document.querySelectorAll(elementSelector);
	// Check if there are elements matching the selector and if the requested instance exists
	if (elements.length > instance) {
		// Scroll to the specified instance of the element
		elements[instance].scrollIntoView({ behavior: 'smooth' });
	}
}

function copyLinkText() {
	// Get the text field
	var copyText = document.getElementById('phone-number');
	// Select the text field
	copyText.select();
	copyText.setSelectRange(0, 99999); // For mobile devices
	//Copy text inside text field
	navigator.clipboard.writeText(copyText.value);
	// Alert the copied text
	alert('Phone Number Copied!');
}

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');

const phoneNumber = document.getElementById('phone-number');

link1.addEventListener('click', () => {
	scrollToElement('.header');
});

link2.addEventListener('click', () => {
	// Scroll to second element with "header" class
	scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
	scrollToElement('.header', 2);
});

link4.addEventListener('click', () => {
	scrollToElement('footer');
});

phoneNumber.addEventListener('click', () => {
	copyLinkText();
});
