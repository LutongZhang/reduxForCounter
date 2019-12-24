import React, { Component } from 'react';
import Counter from './counter'
import store from './store/store'
import { Provider } from 'react-redux'


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
        </div>
      </Provider>
    )
  }


}



export default App;

