import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
class Login extends PureComponent {
    render () {
        const { loginStates } = this.props
        if (loginStates) {
            return (
                <div>写文章</div>
            )
        } else {
            return <Redirect to="/login" />
        }
        
    }
}

const mapState = (state) => ({
    loginStates: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Login)