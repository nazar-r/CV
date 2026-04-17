import { useState } from "react";

interface ImageItem {
    src: string;
    alt: string;
};

export const Screenshots = () => {
    const images: ImageItem[] = [
        { src: "/Login-note.png", alt: "Page: Login" },
        { src: "/Note-prev.png", alt: "Page: Lobby Preview" },
        { src: "/Lobby-note.png", alt: "Page: Lobby" },
    ];

    const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedImage(null);
            setIsClosing(false);
        }, 200);
    };

    return (
        <>
            <div className="projects-page__item--list-item__heading">Screenshots</div>

            {selectedImage ? (
                <div className={`projects-page__image-tab ${isClosing ? "fade" : ""}`}>
                    <div className="projects-page__image-tab-main">
                        <img key={selectedImage.src} src={selectedImage.src} alt={selectedImage.alt} className="projects-page__button-image-clicked" />
                        <div className="projects-page__image-title">{selectedImage.alt}</div>
                    </div>

                    <div className="projects-page__image-container">
                        {images.map((image) => (
                            <img key={image.src} src={image.src} alt={image.alt} className="projects-page__button-image" onClick={() => setSelectedImage(image)} />
                        ))}

                        <svg className="projects-page__image-container-button" width="14" height="14" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClose}>
                            <g opacity="1">
                                <path d="M7.34091 0H9.65909V17H7.34091V0Z" fill="currentColor" />
                                <path d="M17 7.34091V9.65909L0 9.65909L0 7.34091L17 7.34091Z" fill="currentColor" />
                            </g>
                        </svg>
                    </div>
                </div>
            ) : (
                <div className="projects-page__image-container-visible">
                    {images.map((image) => (
                        <img key={image.src} src={image.src} alt={image.alt} className="projects-page__button-image" onClick={() => setSelectedImage(image)} style={{ cursor: "pointer" }} />
                    ))}
                </div>
            )}
        </>
    );
};