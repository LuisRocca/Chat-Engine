import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css'

const projectID = '37e27b79-1e81-4611-a9e5-39cafcbf9da9'

const app = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        
        <ChatEngine
        height="100vh"
        projectID={projectID}
        userName= {localStorage.getItem('username')}
        userSecret= {localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}

export default app
