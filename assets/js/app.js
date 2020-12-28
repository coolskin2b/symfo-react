// == Import : npm
import React from 'react'
import { render } from 'react-dom'

import '../styles/app.scss';


// import { Provider } from 'react-redux'

// == Import : local
import App  from './components/App'
// import store from 'src/store' redux

// // == Render avec redux
// const rootComponent = (
//     <Provider store={store}>
//         <App />
//     </Provider>
// )

// == Render avec redux
const rootComponent = (
        <App />
)


// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'))