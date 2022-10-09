
import PropTypes from 'prop-types';
import ImageGalaryItem from '../ImageGalleryItem';
import { StyledImageGallery, StyledImageGalleryItem } from './ImageGallery.styled';

function ImageGalary({ images }) {

    return (
            <StyledImageGallery>
            {images.map(({ id, ...props }) => (
                <StyledImageGalleryItem
                    key={id}
                >
                    <ImageGalaryItem {...props}/>
                </StyledImageGalleryItem>
            ))}
            </StyledImageGallery>

    )
}


ImageGalary.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
};

export default ImageGalary;



