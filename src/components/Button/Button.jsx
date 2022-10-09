import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';

 const Button = ({ onHadleClickMore }) => {
    
    return <LoadMoreButton
        onClick={onHadleClickMore}
        type="button"
    >
        Load more
    </LoadMoreButton>
}

Button.propTypes = {
    onHadleClickMore: PropTypes.func.isRequired,
}


export default Button;