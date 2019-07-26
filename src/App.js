import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Header from './common/header'
import store from './store'
import { GlobalStyled } from './style'
import { IconfontStyled } from './statics/iconfont/iconfont'
class App extends Component {
    render () {
        return (
            <div>
                <GlobalStyled />
                <IconfontStyled />
                <Provider store = {store}>
                    <Header />
                </Provider>
            </div>
        )
    }
}

export default App;
