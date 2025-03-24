document.addEventListener('DOMContentLoaded', () => {
    // Store original image sources
    const originalImages = {
        fishcollage: document.getElementById('fishcollage').src
    };

    // Define image sets for each project
    const projectImages = {
        'hereiam': {
            fishcollage: './media/hereiam/hero.png',
        },
        'creativeembedded': {
            fishcollage: './media/booknookstatic.JPG',
        },
        'rhymevis': {
            fishcollage: './media/rhymevis/rhyme_nodes.png',
        },
        'shaders': {
            fishcollage: './media/matx/lama.png',
        },
        'design': {
            fishcollage: './media/graphicdesign/typography/modular_letterform/modular_specimen2.png',
        },
        'illustrations': {
            fishcollage: './media/art/world3.JPG'
        },
    };

    // Add hover listeners to project links
    document.querySelectorAll('.projects a, .art a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            const projectId = link.getAttribute('href').replace('.html', '');
            if (projectImages[projectId]) {
                Object.keys(projectImages[projectId]).forEach(imgId => {
                    const img = document.getElementById(imgId);
                    if (img) img.src = projectImages[projectId][imgId];
                });
            }
        });

        link.addEventListener('mouseleave', () => {
            // Reset to original images
            Object.keys(originalImages).forEach(imgId => {
                const img = document.getElementById(imgId);
                if (img) img.src = originalImages[imgId];
            });
        });
    });
});
