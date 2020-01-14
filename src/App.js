import React from 'react'; 
import { Provider } from 'react-redux';

import store from './store';

import TestCounter from './TestCounter'

function App() {
  return (
    <Provider store={store}>         
         <div>
           <TestCounter />
         </div>
    </Provider>  
  );
}

export default App;
