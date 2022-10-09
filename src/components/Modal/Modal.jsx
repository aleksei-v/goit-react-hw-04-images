import { useEffect } from "react";
import PropTypes from 'prop-types';
import { Overlay, StyledModal } from "./Modal.styled";
import { Box } from "components/Box";

function Modal ({ image, tags, onClose }) {

    const handleClickOnBackdrop = e => {
        if (e.currentTarget === e.target) {
            onClose()
        }
    };
    useEffect(() => {
        const handleClickClose = e => {
            if (e.code === 'Escape') {
                onClose()
            }
        };

        window.addEventListener('keydown', handleClickClose)
    
        return () => {
            window.removeEventListener('keydown', handleClickClose)
        }
    }, [onClose]);

    return (
        <Overlay onClick={handleClickOnBackdrop}>
            <StyledModal>
                <Box as="img" width="100%" src={image}
                    alt={tags} />
            </StyledModal>
        </Overlay>
    );
};

Modal.propTypes = {
    image: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;