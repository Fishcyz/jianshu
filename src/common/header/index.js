import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button } from './style'

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载APP</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in = {props.focused}
                        timeout = {200}
                        classNames = "slide"
                    >
                        <NavSearch 
                            className = {props.focused ? 'focused' : ''}
                            onClick = {props.handleInputFocus}
                            onBlur = {props.handleInputBlur}
                        />
                    </CSSTransition>                        
                    <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6dd;</span>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting"><span className="iconfont">&#xe62d;</span> 写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus () {
            dispatch(actionCreators.searchFocus())
        },

        handleInputBlur () {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)