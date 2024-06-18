document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("image-form");
    const imageUrlInput = document.getElementById("image-url");
    const img = document.getElementById("image");
    const output = document.getElementById("output");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const imageUrl = imageUrlInput.value.trim();

        if (imageUrl) {
            img.src = imageUrl;
            img.style.display = "none";
            output.innerHTML = "Loading image...";
        } else {
            output.innerHTML = "Please enter a valid image URL.";
        }
    });

    img.onload = () => {
        const width = img.width;
        const height = img.height;
        const ratio = (width / height);

        output.innerHTML = `
            <p>Width: ${width}px</p>
            <p>Height: ${height}px</p>
            <p>Aspect Ratio: ${ratio}</p>
        `;
        img.style.display = "block";
    };

    img.onerror = () => {
        output.innerHTML = `<p>Failed to load image. Please check the URL and try again.</p>`;
    };
});
