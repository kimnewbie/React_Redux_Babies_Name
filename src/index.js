import React from 'react'; import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './components/App';
// Redux 관련 불러오기
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';


// store 생성
const store = createStore(reducers);
window.store = store

ReactDOM.render(
  <Provider store={store}> {/* App 컴포넌트가  store에 연동 */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);