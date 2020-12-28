// == Import : npm
import React from 'react'
import {render} from 'react-dom'

import '../styles/app.scss';


// import { Provider } from 'react-redux'
// == Import : local
import App from './components/App'
import Navigation from './components/Navigation'
import Slider from "./components/Slider";
import Marketing from "./components/Marketing";
import Featurette from "./components/Featurette";
// import store from 'src/store' redux

// // == Render avec redux
// const rootComponent = (
//     <Provider store={store}>
//         <App />
//     </Provider>
// )

// == Render avec redux
const rootComponent = (
    <>
        <Navigation/>
        <Slider/>
        <Marketing/>
        <Featurette/>
    </>
)


// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'))