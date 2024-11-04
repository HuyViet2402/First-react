function UserGreeting(props) {
    return(props.isLogin ? 
        <h2 className="welcome-message">Welcome {props.username}</h2> :
        <h2 className="log-in-prompt">Please log in to continue</h2>
    );
}
export default UserGreeting;