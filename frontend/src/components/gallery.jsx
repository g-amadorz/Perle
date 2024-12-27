import React from 'react';
import '../css/gallery.css'; // Correct path for CSS

const Gallery = () => {
    const images = [
        '/images/eyes.jpeg',
        '/images/bed.jpeg',
        '/images/jude.jpeg',
        '/images/me.jpeg',
        '/images/snowaball.jpeg',
        '/images/snowball1.jpeg',
        '/images/weird.jpeg',
        '/images/bedagain.jpeg',
        '/images/snowy_bed.png',
        '/images/mirror.png',
        '/images/rookie.png',
        '/images/snowball_walk.png',
        '/images/pizza.png',
        '/images/legs.png',
        '/images/gaga.png',
        '/images/dodo.png',
    ];

    return (
        <div className="gallery-container">
            {images.map((src, index) => (
                <div className="gallery-item" key={index}>
                    <img src={src} alt={`Gallery item ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Gallery

