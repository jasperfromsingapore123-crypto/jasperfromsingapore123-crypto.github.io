/* ================================================================
   MOBILE NAVIGATION
   This opens and closes the menu on smaller screens.
   ================================================================ */

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation" : "Close navigation"
    );

    navLinks.classList.toggle("open");
  });

  /* Close the menu after a visitor selects one of its links. */
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
      navLinks.classList.remove("open");
    });
  });
}

/* ================================================================
   PLACEHOLDER LINKS
   Prevent unfinished href="#" links from jumping to the top.
   Delete the placeholder-link class after adding a real URL.
   ================================================================ */

document.querySelectorAll('a.placeholder-link[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

/* Automatically keep the footer year current. */
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* ADD: Future JavaScript features can go below this comment.
   Examples: project filtering, a theme switcher, or GitHub API data. */