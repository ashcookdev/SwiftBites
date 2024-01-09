import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { DataStore } from 'aws-amplify';
import { Messages } from '../models';
import { Auth } from 'aws-amplify';
import { format } from 'date-fns';
import { Dialog, Transition } from '@headlessui/react';
import Online from './online';

const templates = ['Stuck In Traffic', 'Will be Back Late', 'Order has missing items'];

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [shouldFlash, setShouldFlash] = useState(false);
  const [viewMessages, setViewMessages] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 120000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchMessages();
    const subscription = DataStore.observe(Messages).subscribe(() => fetchMessages());

    Auth.currentAuthenticatedUser().then((user) => setUserEmail(user.attributes.email));
    return () => subscription.unsubscribe();
  }, []);

  async function fetchMessages() {
    const messagesData = await DataStore.query(Messages);
    setMessages(messagesData);
  }

  async function handleAddMessage() {
    const user = await Auth.currentAuthenticatedUser();
    const { email } = user.attributes;
    const createdAt = new Date().toISOString().split('T')[1];

    await DataStore.save(
      new Messages({
        content: inputValue,
        email,
        group: [...selectedGroups, 'Admin', 'Drivers'],
        createdAt,
      })
    );

    setInputValue('');
    if (selectedGroups.includes('Kitchen')) {
      setShouldFlash(true);
    }
  }

  const groups = ['Dispatch', 'Kitchen'];

  return (

    
<div className="flex bg-white w-full rounded-lg mt-5 bg-gradient-to-bl from-zinc-100 via-sky-100 to-purple-200 shadow-md">
      <main className="flex-1 p-4 overflow-y-scroll">
        <div className="flex items-center mb-4">
       
          <div className="flex-shrink-0">
            <button
              className="bg-indigo-500 text-white p-2 rounded-lg items-center"
              onClick={() => setViewMessages(!viewMessages)}
            >
              {viewMessages ? 'Close Messages' : 'Open Messages'}
            </button>
          </div>
        </div>
  
        {viewMessages && (
          <div className="text-black mt-10 ">
            <div className='mb-10'>
              <Online />
            </div>
  
            <div
              className={`border p-4 mb-4 h-64 overflow-y-scroll shadow-md rounded-lg ${
                shouldFlash ? 'animate-pulse' : ''
              }`}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-2 rounded-lg mb-2 ${
                    message.email === userEmail ? 'bg-purple-500 text-white' : 'bg-blue-200'
                  }`}
                >
                  <div className="font-bold">{message.email}</div>
                  {message.content}
                </div>
              ))}
            </div>
          </div>
        )}
  
        <input
          className="border p-2 border-purple-900 mr-2 w-full rounded-lg"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 mr-2 rounded-lg w-full mt-2"
          onClick={handleAddMessage}
        >
          Add Message
        </button>
        <div className="flex mt-2">
          {templates.map((template) => (
            <button
              key={template}
              className="bg-green-200 text-black p-2 mr-2 rounded-lg"
              onClick={() => setInputValue(template)}
            >
              {template}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
  
  
  
  
}

export default withAuthenticator(App);
