import { Component } from "react";
import PropTypes from 'prop-types';

import { Overlay, StyledModal } from "./Modal.styled";
import { Box } from "components/Box";

class Modal extends Component {

    handleClickClose = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }

    handleClickOnBackdrop = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleClickClose)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleClickClose)
    }

    render() {
        const { image, tags } = this.props;
        return (
            <Overlay onClick={this.handleClickOnBackdrop}>
            <StyledModal>
                <Box as="img" width="100%" src={image}
                    alt={tags} />
            </StyledModal>
        </Overlay>
       )
    }
};

Modal.propTypes = {
    image: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default Modal;