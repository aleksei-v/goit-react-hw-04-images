import { useState } from "react";
import Modal from "../Modal";
import PropTypes from 'prop-types';
import { ImageGalleryItemImage } from "./ImageGalleryItem.styled";

function ImageGalaryItem ({ largeImageURL, webformatURL, tags }) {
    const [showModal, SetShowModal] = useState(false);

    return (
        <>
            <ImageGalleryItemImage
                src={webformatURL}
                alt={tags}
                onClick={()=> SetShowModal(!showModal)}
            />
            {showModal && (
                <Modal
                    image={largeImageURL}
                    tags={tags}
                    onClose={() => SetShowModal(!showModal)}
                />)}
        </>
    );
};

ImageGalaryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}


export default ImageGalaryItem;