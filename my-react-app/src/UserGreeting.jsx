import PropsType from 'prop-types';
function UserGreeting(props) {
    return(props.isLogin ? 
        <h2 className="welcome-message">Welcome {props.username}</h2> :
        <h2 className="log-in-prompt">Please log in to continue</h2>
    );
}
UserGreeting.PropsType = {
    isLogin: PropsType.bool,
    username: PropsType.string,
}

UserGreeting.defaultProps = {
    isLogin: false,
    username: "Guest",
}
export default UserGreeting;