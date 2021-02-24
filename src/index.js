import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import firebase from './firebase';

import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

class Root extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.history.push('/');
            }
        })
    }

    render() {
    return (

                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>

        )
    }
} 

const RootWithAuth = withRouter(Root);

ReactDOM.render(
<Router>
    <RootWithAuth />
</Router>, document.getElementById('root'));
registerServiceWorker();
