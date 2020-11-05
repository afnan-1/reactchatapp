import React, { Component } from 'react'
import { connect } from 'react-redux';
import { facebook_login, setData } from '../../store/action';
import './style.css'
class Home extends Component {
    state = {  }
    render() { 
        let user = { name:'afnan',email:'afnannnnnnn'}
        console.log("props",this.props);
        return (
            <div>
                hello meri jaan
                {/* <button onClick={()=>this.props.setData({user})}></button> */}
                <button onClick={()=>this.props.facebook_login()}>fb login</button>
            </div>
         );
    }
}

const mapStateToProps=(state)=>({
users:state.users
})

const mapDispatchToProps=(dispatch)=>({
    setData:(data)=> dispatch(setData(data)),
    facebook_login:(data)=> dispatch(facebook_login(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);