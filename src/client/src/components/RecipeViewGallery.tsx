import  ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: './src/assets/ente1.png',
        thumbnail: './src/assets/ente1.png'
    },
    {
        original: './src/assets/ente2.png',
        thumbnail: './src/assets/ente2.png'
    },
    {
        original: './src/assets/ente3.png',
        thumbnail: './src/assets/ente3.png'
    }
]

const galleryStyles = {
    width: '100%',
    height: '700px', // Set the desired height for the images
};

const RecipeViewGallery = () => {
    return(
        <ImageGallery items={images}
                      renderItem={(item) => (
                          <img
                              src={item.original}
                              style={galleryStyles}
                              alt="Recipe"
                          />
                      )}
        />
    )
}

export default RecipeViewGallery;