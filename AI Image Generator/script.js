document.getElementById('generate-btn').addEventListener('click', async () => {
    const inputText = document.getElementById('input-text').value.trim();
    if (inputText === '') {
        alert('Please enter some text.');
        return;
    }

    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?query=${inputText}&client_id=b3EVZTb5WmivIbexy0DW-jPFKCbQ2RmslcBVUZrCIiQ`);
        if (!response.ok) throw new Error('Unable to fetch image.');

        const imageData = await response.json();
        if (imageData.urls && imageData.urls.full) {
            const generatedImage = document.getElementById('generated-image');
            generatedImage.src = imageData.urls.full;
            document.getElementById('image-container').style.display = 'block';
        } else {
            alert('No image found for the given text.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to generate image. Please try again later.');
    }
});
