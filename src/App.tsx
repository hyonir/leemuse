import React, {useEffect} from 'react';
import './App.css';
import { IndexPage } from './components/views/IndexPage';
import * as store from './store';
import network from './utils/network';

function App() {
  const { authStore } = store;

  useEffect(() => {
    const _t = authStore.getCurrentToken();
    if (!_t) {
      try {
        network().spotify().getToken().then((res: any) => {
          // console.log(res);
          authStore.setCurrentToken(res);
        })
      } catch (e) {

      }
    }
  });

  return (
        <IndexPage/>
  );
}

export default App;
