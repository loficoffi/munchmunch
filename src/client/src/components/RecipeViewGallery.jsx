import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import duck1Image from '../assets/ente1.png'
import duck2Image from '../assets/ente2.png'
import duck3Image from '../assets/ente3.png'

const images = [
    {
        original: duck1Image,
        thumbnail: duck1Image
    },
    {
        original: duck2Image,
        thumbnail: duck2Image
    },
    {
        original: duck3Image,
        thumbnail: duck3Image
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