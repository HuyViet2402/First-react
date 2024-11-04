import PropTypes from 'prop-types'
function Printer(props) {
    return(
        <div className="printer">
            <p>Name: {props.name}</p>
            <p>Available: {props.isAvailable ? "Yes" : "No"}</p>
        </div>
    );
} 
Printer.propTypes = {
    name: PropTypes.string,
    isAvailable: PropTypes.bool,
}
Printer.defaultProps = {
    name: "Default printer",
    isAvailable: true,
}
export default Printer;