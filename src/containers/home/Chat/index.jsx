import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from '..';
import firebase from '../../../config/firebase'
import { get_users } from '../../../store/action';
class Chat extends Component {
    state = {
        chat_user: {},
        chats: [],
        message: ''
    }
    uid_merge=(uid1, uid2)=> {
        if (uid1 < uid2) {
            return uid1 + uid2
        } else {
            return uid2 + uid1
        }
    }
    
    chat = (user) => {
        this.setState({
            chat_user: user
        })
        let current_user = this.props.current_user
        // console.log(current_user.uid);
        let merge_uid = this.uid_merge(current_user.uid,user.uid)
        this.get_message(merge_uid)
      
    }

    get_message = (uid) => {
        firebase.database().ref('/').child(`chats/${uid}`).on('child_added', (messages) => {
            this.state.chats.push(messages.val())
            this.setState({
                chats: this.state.chats
            })
        })
    }


    send_message = () => {
        let user = this.props.current_user
        let chat_user = this.state.chat_user
        let merge_uid = this.uid_merge(user.uid, chat_user.uid)
        // console.log(this.uid_merge(user.uid,chat_user.uid));
        firebase.database().ref('/').child(`chats/${merge_uid}`).push({
            message: this.state.message,
            name: user.name,
            uid: user.uid
        })
    }
    componentDidMount() {
        this.props.get_users();
    }

    render() {
        let user= this.props.current_user.uid
        return (
            <div>
                <h2>welcome {this.props.current_user.name}</h2>
                <img src={this.props.current_user.profile} alt="" />
                <h2>Email: {this.props.current_user.email}</h2>
                <div style={{ display: "flex" }}>
                    <div style={{ backgroundColor: 'grey' }}>
                        <h4>Chat Users</h4>
                        {this.props.users.map((v, i) => {
                            return v.uid !== this.props.current_user.uid && <li key={i}>
                                <img src={v.profile} width='20' />
                                {v.name}
                                <button onClick={() => this.chat(v)}>Chat</button>
                            </li>
                        })}
                    </div>
                    <div style={{ width: '400px', backgroundColor: "yellow" }}>
                        <h4>Chat</h4>
                        {Object.keys(this.state.chat_user).length ?
                            <div>
                                <h4><img src={this.state.chat_user.profile} width="20" alt="" /> {this.state.chat_user.name}</h4>
                                <ul>
                                    {this.state.chats.map((v, i) => {
                                        return <li style={{color:v.uid===this.props.current_user.uid?'red':'green'}} key={i}>{v.message}</li>
                                    })}
                                </ul>
                                <input type="text" value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} placeholder="enter chat" />
                                <button onClick={() => this.send_message()} > Send</button>
                            </div> :
                            <h4>no user</h4>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    current_user: state.current_user,
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    get_users: () => dispatch(get_users()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat);