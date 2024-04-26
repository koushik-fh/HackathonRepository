import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigationStack from './navigationStack/NavigationStack';
import {NavigationContainer} from '@react-navigation/native'
import rootReducer from './redux/store';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootSaga from './redux/rootSaga';
import createSagaMiddleware from 'redux-saga';



 
export default function App() {
  const sagaMiddleWare = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

  sagaMiddleWare.run(rootSaga)
  return (
    <Provider store={store}>
    <NavigationContainer>
        <NavigationStack/>
    </NavigationContainer>
    </Provider>

  );
}


