import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import duck1Image from "../assets/ente1.png";
import duck2Image from "../assets/ente2.png";
import duck3Image from "../assets/images/ente3.png";

const images = [
  {
    original: "./src/assets/ente1.png",
    thumbnail: "./src/assets/ente1.png",
  },
  {
    original: "./src/assets/ente2.png",
    thumbnail: "./src/assets/ente2.png",
  },
  {
    original: "./src/assets/ente3.png",
    thumbnail: "./src/assets/ente3.png",
  },
];

const galleryStyles = {
  width: "100%",
  height: "500px", // Set the desired height for the images
};

const RecipeViewGallery = () => {
  return (
    <ImageGallery
      items={images}
      renderItem={(item) => (
        <img src={item.original} style={galleryStyles} alt="Recipe" />
      )}
    />
  );
};

export default RecipeViewGallery;
