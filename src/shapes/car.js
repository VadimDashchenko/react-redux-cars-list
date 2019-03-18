import PropTypes from 'prop-types';

const carShape = PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
});

export default carShape;