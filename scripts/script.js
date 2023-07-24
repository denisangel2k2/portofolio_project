document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".hidden-container");

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.classList.add("main_content");
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    sections.forEach(section => observer.observe(section));

    function handleScroll() {
        sections.forEach(section => {
            const isVisible = section.getBoundingClientRect().top < window.innerHeight && section.getBoundingClientRect().bottom >= 0;

            if (isVisible) {
                section.classList.add("main_content");
            } else {
                section.classList.remove("main_content");
            }
        });
    }
    window.addEventListener("wheel", handleScroll);
});