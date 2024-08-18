import "./scss/index.scss";

// App script
document.addEventListener("DOMContentLoaded", () => {
  // dropdown
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((el) => {
    const trigger = el.querySelector(".dropdown-trigger");
    const content = el.querySelector(".dropdown-content");

    trigger.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent click event from bubbling up to the document
      el.classList.toggle("show");
    });

    // Close dropdown when clicking outside of it
    document.addEventListener("click", (event) => {
      if (!el.contains(event.target)) {
        el.classList.remove("show");
      }
    });

    // Prevent dropdown from closing when clicking inside it
    content.addEventListener("click", (event) => {
      event.stopPropagation();
      const dropdownItem = content.querySelectorAll(".dropdown-item");
      dropdownItem.forEach((item) =>
        item.addEventListener("click", () => el.classList.remove("show"))
      );
    });
  });
});
