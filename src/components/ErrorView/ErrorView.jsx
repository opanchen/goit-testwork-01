import PropTypes from 'prop-types';

export const ErrorView = ({message}) => {
    return (
        <div>{message}</div>
    )
}

ErrorView.propTypes = {
    message: PropTypes.string.isRequired,
}