import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import { actionCreators } from './store'

import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style.js'
class Home extends PureComponent {
    render () {
        return (
            <Fragment>
                <HomeWrapper>
                    <HomeLeft>
                        <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4682/cef3102cc521ac4b87a82b5c6f93300ba0aa21c8.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                </HomeWrapper>
                { 
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}><i className="iconfont">&#xe616;</i></BackTop> : null
                }
            </Fragment>
        )
    }

    handleScrollTop () {
        window.scrollTo(0, 0)
    }

    bindEvents () {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    removeEvents () {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    componentDidMount () {
        this.props.changeHomeData()
        this.bindEvents()
    }

    componentWillUnmount () {
        this.removeEvents()
    }
}

const mapState = (state) => ({
    showScroll : state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData () {
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow () {
        if (document.documentElement.scrollTop > 200) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home)