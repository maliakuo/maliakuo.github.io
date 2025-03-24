document.addEventListener('DOMContentLoaded', () => {
    const fishCollage = document.getElementById('fishcollage');
    const originalImage = fishCollage.src;

    // Define image paths for each project
    const projectImages = {
        'hereiam': './media/hereiam/hero.png',
        'creativeembedded': './media/booknookstatic.JPG',
        'rhymevis': './media/rhymevis/rhyme_nodes.png',
        'shaders': './media/matx/lama.png',
        'design': './media/graphicdesign/typography/modular_letterform/modular_specimen2.png',
        'illustrations': './media/art/world3.JPG'
    };

    // Add hover listeners to all project and art links
    document.querySelectorAll('.projects a, .art a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            const projectId = link.getAttribute('href').replace('.html', '');
            if (projectImages[projectId]) {
                fishCollage.src = projectImages[projectId];
            }
        });

        link.addEventListener('mouseleave', () => {
            fishCollage.src = originalImage;
        });
    });
});
