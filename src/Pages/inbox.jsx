import { useState } from "react";
import { FaInbox, FaPaperPlane, FaTrash, FaEnvelopeOpen } from "react-icons/fa";

const messagesData = [
  {
    id: 1,
    sender: "John Doe",
    subject: "Meeting Reminder",
    content: "Hey, don't forget about our meeting at 3 PM today.",
    time: "10:30 AM",
    read: false,
  },
  {
    id: 2,
    sender: "Jane Smith",
    subject: "Project Update",
    content: "The project is progressing well. I'll share updates soon.",
    time: "09:15 AM",
    read: true,
  },
  {
    id: 3,
    sender: "Mike Johnson",
    subject: "Invoice Payment",
    content: "Your invoice has been processed. Please check your account.",
    time: "Yesterday",
    read: true,
  },
];

const Inbox = () => {
  const [messages, setMessages] = useState(messagesData);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
    setMessages(messages.map((msg) => (msg.id === message.id ? { ...msg, read: true } : msg)));
  };

  return (
    <div className="flex h-screen flex-wrap md:flex-nowrap gap-3 bg-gray-100 rounded">

      <div className="w-full md:w-1/3 bg-gray-800 text-white p-4 rounded">
        <h2 className="text-lg font-semibold mb-4">Inbox</h2>
        <ul className="space-y-2">
          <li className="flex items-center p-2 bg-red-600 rounded-md cursor-pointer">
            <FaInbox className="mr-2" /> Inbox
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <FaPaperPlane className="mr-2" /> Sent
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <FaTrash className="mr-2" /> Trash
          </li>
        </ul>
      </div>


      <div className="w-full bg-white shadow-md p-4 rounded">
        <h2 className="text-lg font-semibold mb-4">Messages</h2>
        <ul>
          {messages.map((message) => (
            <li
              key={message.id}
              className={`p-3 border-b cursor-pointer ${selectedMessage?.id === message.id ? "bg-blue-100" : "hover:bg-gray-200"
                } ${message.read ? "text-gray-600" : "font-bold text-black"}`}
              onClick={() => handleSelectMessage(message)}
            >
              <div className="flex justify-between">
                <span>{message.sender}</span>
                <span className="text-sm">{message.time}</span>
              </div>
              <p className="text-sm">{message.subject}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full bg-white shadow-md p-6 rounded">
        {selectedMessage ? (
          <>
            <h2 className="text-xl font-semibold">{selectedMessage.subject}</h2>
            <p className="text-gray-600 text-sm mb-2">{selectedMessage.sender}</p>
            <p className="mt-4">{selectedMessage.content}</p>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <FaEnvelopeOpen className="text-3xl mr-2" />
            <p>Select a message to read</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
