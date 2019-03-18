import PropTypes from 'prop-types';

const userShape = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired
});

export default userShape;