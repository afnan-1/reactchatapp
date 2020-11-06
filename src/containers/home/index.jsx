import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { facebook_login, setData } from '../../store/action';
import './style.css'
class Home extends Component {

    render() { 
        let user = { name:'afnan',email:'afnannnnnnn'}
        // console.log('user',this.props);
        return (
            <div>
                hello meri jaan
                {/* <button onClick={()=>this.props.setData({user})}></button> */}
                <button onClick={()=>this.props.facebook_login(this.props.history)}>fb login</button>
            </div>
         );
    }
}

const mapStateToProps=(state)=>({
users:state.users
})

const mapDispatchToProps=(dispatch)=>({
    setData:(data)=> dispatch(setData(data)),
    facebook_login:(history)=> dispatch(facebook_login(history))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));