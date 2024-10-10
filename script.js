// Functin to close all FAQ items except the clicked one
function closeAllFAQs(currentBtn) {
  const buttons = document.querySelectorAll(".faq-item button");
  buttons.forEach((btn) => {
    if (btn !== currentBtn) {
      const answer = btn.parentElement.nextElementSibling;

      if (answer) {
        closeFAQ(btn, answer);
      }
    }
  });
}

// Open a specific FAQ item
function openFAQ(btn, answer) {
  answer.classList.add("show");
  answer.style.maxHeight = answer.scrollHeight + "px"; // Expand the answer
  btn.setAttribute("aria-expanded", "true");
}

// Close a specific FAQ item
function closeFAQ(btn, answer) {
  answer.classList.remove("show");
  answer.style.maxHeight = null; // Collapse the answer
  btn.setAttribute("aria-expanded", "false");
}

// Function to toggle a FAQ's visibiity
function toggleFAQ(btn) {
  const answer = btn.parentElement.nextElementSibling;
  const isExpanded = btn.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    closeFAQ(btn, answer); // If opened, close it
  } else {
    openFAQ(btn, answer); // if closed, open it
  }
}

// main event listener function
function handleFAQClick(event) {
  const clickedButton = event.target.closest("button");

  if (clickedButton) {
    /* if the clicked button is not expanded, 
    close all others and open the clicked button */
    if (clickedButton.getAttribute("aria-expanded") === "false") {
      closeAllFAQs(clickedButton);
    }
    toggleFAQ(clickedButton); // Toggle the clicked FAQ
  }
}

// Attach event listener to the container using event delegation
const faqContainer = document.querySelector(".faq-container");
faqContainer.addEventListener("click", handleFAQClick);
