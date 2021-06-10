import PropTypes from 'prop-types'

const Button = ({ bgColor, text, onClick}) => {

    return (
        <button onClick={onClick} style={{backgroundColor: bgColor}} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
