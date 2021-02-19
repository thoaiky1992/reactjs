import React from 'react';
class Login extends React.Component {
    constructor(props){
        super(props)
        this.email = React.createRef();
        this.password = React.createRef();
    }
    handleClick = () => {
        this.props.history.push('/user')
        localStorage.setItem('token',123456)

    }
    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <div>
                    <span>email</span>
                    <input className="email" type="text" ref={this.email} />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <span>password</span>
                    <input className="password" type="text" ref={this.password}  />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <button onClick={this.handleClick}>submit</button>
                </div>
            </div>  
        )
    }
}
export default Login;

// JSON.stringify : ep' thanh chuoi~ string
// JSON.parse : ep' nguoc lai