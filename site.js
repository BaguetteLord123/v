const contactToggle = document.getElementById("contact-toggle");
const contactDropdown = document.getElementById("contact-dropdown");

if (contactToggle && contactDropdown) {
    contactToggle.addEventListener("click", () => {
        const isOpen = !contactDropdown.hidden;

        contactDropdown.hidden = isOpen;
        contactToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".contact-menu")) {
            contactDropdown.hidden = true;
            contactToggle.setAttribute("aria-expanded", "false");
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            contactDropdown.hidden = true;
            contactToggle.setAttribute("aria-expanded", "false");
        }
    });
}
