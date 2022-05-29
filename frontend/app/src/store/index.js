import { createStore } from 'redux';
import AppUI from './reducers/index';

let Store = createStore(AppUI);

export default Store;