import React from 'react';
import { Route, Redirect } from 'react-router-dom'
class ConfigRoute extends React.Component {
    render(){
        const getToken = localStorage.getItem('token');
        const token = JSON.parse(getToken);
        if(!token){
            return <Redirect to="/" />
        }
        return(
            <Route 
                path={this.props.path}
                exact
                render={(props) => {
                    if(this.props.component){
                        return React.createElement(this.props.component);
                    }
                }}
            />
        )
    }
}
export default ConfigRoute;

