import React from 'react'
import Navbar from '../../shared/components/Navbar/Navbar';
import Chatbot from 'react-chatbot-kit'

import ActionProvider from './rende/ActionProvider';
import MessageParser from './rende/MessageParser';
import config from './rende/Config';

export default function ChatPage() {

  return (

    <div>

      <div className="Chat">
        <header className="ChatStructure">
          <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        </header>
        <div>
          <Navbar />
        </div>

      </div>

    </div>

  )

}
