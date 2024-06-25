document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("image-form");
    const formMulti = document.getElementById("image-form-multi");
    const imageUrlInput = document.getElementById("image-url");
    const imageUrlInputMulti = document.getElementById("image-url-multi");
    const output = document.getElementById("output");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const imageUrl = imageUrlInput.value.trim();

        if (imageUrl) {
            output.innerHTML = "Loading image...";
            loadImageInfo(imageUrl, output);
        } else {
            output.innerHTML = "Please enter a valid image URL.";
        }
    });

    formMulti.addEventListener("submit", (event) => {
        event.preventDefault();
        const imageUrls = imageUrlInputMulti.value.trim().split('\n').map(url => url.trim());

        if (imageUrls.length > 0) {
            output.innerHTML = "Loading images...";
            output.innerHTML = ''; // Clear previous output
            imageUrls.forEach(url => {
                loadImageInfo(url, output);
            });
        } else {
            output.innerHTML = "Please enter valid image URLs.";
        }
    });

    function loadImageInfo(url, outputElement) {
        const img = new Image();
        img.src = url;

        img.onload = () => {
            const width = img.width;
            const height = img.height;
            const ratio = (width / height).toFixed(4);

            outputElement.innerHTML += `
                <div>
                    <p>URL: ${url}</p>
                    <p>Width: ${width}px</p>
                    <p>Height: ${height}px</p>
                    <p>Aspect Ratio: ${ratio}</p>
                    <img src="${url}" alt="Image" display: block;">
                </div>
                <hr />
            `;
        };

        img.onerror = () => {
            outputElement.innerHTML += `<p>Failed to load image from URL: ${url}. Please check the URL and try again.</p>`;
        };
    }
});
