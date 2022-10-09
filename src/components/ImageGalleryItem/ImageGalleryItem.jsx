import { Component } from "react";
import Modal from "../Modal";
import PropTypes from 'prop-types';
import { ImageGalleryItemImage } from "./ImageGalleryItem.styled";

class ImageGalaryItem extends Component {
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
        }))
    };

    render() {
        const { largeImageURL, webformatURL, tags} = this.props
        return (
            <>
                <ImageGalleryItemImage
                    src={webformatURL}
                    alt={tags}
                    onClick={this.toggleModal}
                    />
                {this.state.showModal && (
                    <Modal
                        image={largeImageURL}
                        tags={tags}
                        onClose={this.toggleModal}
                    />)}
            </>
        );
    }
};

ImageGalaryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}


export default ImageGalaryItem;