import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface RecipeViewGalleryProps {
  images: string[];
}

const galleryStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const RecipeViewGallery: React.FC<RecipeViewGalleryProps> = ({ images }) => {
  const galleryImages = images.map((image) => ({
    original: image,
  }));

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ImageGallery
        items={galleryImages}
        renderItem={(item) => (
          <div
            style={{
              position: "relative",
              paddingTop: "60%",
            }}
          >
            <img
              src={item.original}
              style={{
                ...galleryStyles,
                position: "absolute",
                top: "10%",
                left: 0,
                width: "100%",
                height: "100%",
              }}
              alt="Recipe"
            />
          </div>
        )}
      />
    </div>
  );
};

export default RecipeViewGallery;
