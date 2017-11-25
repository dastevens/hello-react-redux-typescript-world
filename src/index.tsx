// The component
import * as React from 'react';
class AppProps {
    propsMessage: string;
}
const AppComponent = (props: AppProps) => <p>{props.propsMessage}</p>;

// redux boilerplate
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
class StoreState {
    storeMessage: string;
}
const mapStateToProps = (state: StoreState) => ({ propsMessage: state.storeMessage });
const AppContainer = connect(mapStateToProps)(AppComponent);
const reducer = () => ({ storeMessage: 'Hello world' });
const store = createStore(reducer);

// Render the app
import * as ReactDOM from 'react-dom';
ReactDOM.render(
    <Provider store={store}><AppContainer /></Provider>,
    document.getElementById('root')
);