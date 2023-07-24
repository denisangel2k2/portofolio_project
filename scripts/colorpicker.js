document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("colorPicker");

    function updatePrimaryColor(event) {
        const selectedColor = event.target.value;
        document.documentElement.style.setProperty("--primary-color", selectedColor);
    }

    colorPicker.addEventListener("input", updatePrimaryColor);

    const initialColor = "#33e842";
    document.documentElement.style.setProperty("--primary-color", initialColor);
});
