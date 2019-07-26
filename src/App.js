import React, { Component } from 'react';
import Header from './common/header'
import { GlobalStyled } from './style'
import { IconfontStyled } from './statics/iconfont/iconfont'
class App extends Component {
    render () {
        return (
            <div>
                <GlobalStyled />
                <IconfontStyled />
                <Header />
            </div>
        )
    }
}

export default App;
