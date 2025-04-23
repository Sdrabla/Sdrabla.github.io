function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with ID "${sectionId}" not found.`);
    }
  }
  