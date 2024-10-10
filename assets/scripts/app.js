function scrollToElement(elementSelector, instance = 0) {
  // Select all elements that match the given selector
  const elements = document.querySelectorAll(elementSelector);
  // Check if there are elements matching the selector and if the requested instance exists
  if (elements.length > instance) {
    // Scroll to the specified instance of the element
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

function copyLinkText() {
  // Get the text field
  var copyText = document.getElementById("phone-number");
  // Select the text field
  copyText.select();
  copyText.setSelectRange(0, 99999); // For mobile devices
  //Copy text inside text field
  navigator.clipboard.writeText(copyText.value);
  // Alert the copied text
  alert("Phone Number Copied!");
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

const phoneNumber = document.getElementById("phone-number");

link1.addEventListener("click", () => {
  scrollToElement(".header");
});

link2.addEventListener("click", () => {
  // Scroll to second element with "header" class
  scrollToElement(".header", 1);
});

link3.addEventListener("click", () => {
  scrollToElement("footer");
});

phoneNumber.addEventListener("click", () => {
  copyLinkText();
});

// Function to handle the fade-in effect
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}

// Create an observer that will trigger the effect when sections are in the viewport
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2, // Adjust this threshold as needed
};

const observer = new IntersectionObserver(handleIntersection, options);

// Select all sections and observe them
const sections = document.querySelectorAll(".container");
sections.forEach((container) => {
  observer.observe(container);
});
