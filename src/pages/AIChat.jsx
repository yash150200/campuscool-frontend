// // // import React, { useState } from "react";
// // // import { toast } from "react-toastify";
// // // import "../styles/aichat.css";

// // // // rainbow color classes cycle
// // // const COLORS = ["rainbow-0", "rainbow-1", "rainbow-2", "rainbow-3", "rainbow-4"];

// // // // helper: convert plain text to spans with rainbow classes (for AI only)
// // // function colorizeText(text) {
// // //   const parts = text.split(/(\s+)/); // split words + spaces
// // //   let idx = 0;
// // //   return parts.map((part, i) => {
// // //     if (/^\s+$/.test(part)) {
// // //       return <span key={i}>{part}</span>;
// // //     }
// // //     const cls = COLORS[idx % COLORS.length];
// // //     idx++;
// // //     return (
// // //       <span key={i} className={cls}>
// // //         {part}
// // //       </span>
// // //     );
// // //   });
// // // }

// // // const AIChat = () => {
// // //   const [messages, setMessages] = useState([
// // //     { sender: "ai", text: "Hi! I'm your Campus AI assistant. How can I help you?" },
// // //   ]);
// // //   const [loading, setLoading] = useState(false);
// // //   // const inputRef = useRef(null);

// // //   const [input, setInput] = useState("");

// // //   const sendMessage = async (e) => {
// // //     e.preventDefault();
// // //     if (!input.trim()) return;

// // //     const newMessages = [...messages, { sender: "user", text: input }];
// // //     setMessages(newMessages);
// // //     setInput("");
// // //     setLoading(true);

// // //     try {
// // //       const res = await fetch("http://localhost:5000/api/ai/ask", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //         },
// // //         body: JSON.stringify({ question: input }),
// // //       });

// // //       const data = await res.json();
// // //       const aiResponse = data.answer || "No response from AI";
// // //       setMessages([...newMessages, { sender: "ai", text: aiResponse }]);
// // //     } catch (err) {
// // //       console.error(err);
// // //       toast.error("Failed to get AI response");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="aichat-container">
// // //       <h3 className="text-2xl font-bold mb-4">AI Chat Assistant</h3>

// // //       <div className="flex-1 bg-white rounded shadow p-4 overflow-y-auto space-y-3">
// // //         {messages.map((msg, i) => (
// // //           <div
// // //             key={i}
// // //             className={`p-2 rounded ${
// // //               msg.sender === "user"
// // //                 ? "bg-blue-100 text-right text-black"
// // //                 : "bg-gray-100 text-left"
// // //             }`}
// // //           >
// // //             {msg.sender === "ai" ? (
// // //               <p>{colorizeText(msg.text)}</p> // rainbow for AI
// // //             ) : (
// // //               <p>{msg.text}</p> // plain for user
// // //             )}
// // //           </div>
// // //         ))}
// // //         {loading && <p className="text-gray-400">AI is typing...</p>}
// // //       </div>

// // //       <form onSubmit={sendMessage} className="mt-4 flex">
// // //         <input
// // //           type="text"
// // //           placeholder="Ask something..."
// // //           value={input}
// // //           onChange={(e) => setInput(e.target.value)}
// // //           className="rainbow-input"
// // //         />
// // //         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r">
// // //           Send
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default AIChat;
// // // import React, { useState } from "react";
// // // import { toast } from "react-toastify";
// // // import "../styles/aichat.css";

// // // // rainbow color classes cycle
// // // const COLORS = ["rainbow-0", "rainbow-1", "rainbow-2", "rainbow-3", "rainbow-4"];

// // // // helper: convert plain text to spans with rainbow classes (for AI only)
// // // function colorizeText(text) {
// // //   const parts = text.split(/(\s+)/); // split words + spaces
// // //   let idx = 0;
// // //   return parts.map((part, i) => {
// // //     if (/^\s+$/.test(part)) {
// // //       return <span key={i}>{part}</span>;
// // //     }
// // //     const cls = COLORS[idx % COLORS.length];
// // //     idx++;
// // //     return (
// // //       <span key={i} className={cls}>
// // //         {part}
// // //       </span>
// // //     );
// // //   });
// // // }

// // // const AIChat = () => {
// // //   const [messages, setMessages] = useState([
// // //     { sender: "ai", text: "Hi! I'm your Campus AI assistant. How can I help you?" },
// // //   ]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [input, setInput] = useState("");

// // //   const sendMessage = async (e) => {
// // //     e.preventDefault();
// // //     if (!input.trim()) return;

// // //     // Add user message first
// // //     const newMessages = [...messages, { sender: "user", text: input }];
// // //     setMessages(newMessages);
// // //     setInput("");
// // //     setLoading(true);

// // //     try {
// // //       const res = await fetch("http://localhost:5000/api/ai/ask", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //         },
// // //         body: JSON.stringify({ question: input }),
// // //       });

// // //       const data = await res.json();
// // //       const aiResponse = data.answer || "No response from AI";

// // //       // Append AI response
// // //       setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
// // //     } catch (err) {
// // //       console.error(err);
// // //       toast.error("Failed to get AI response");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="aichat-container">
// // //       <h3 className="text-2xl font-bold mb-4">AI Chat Assistant</h3>

// // //       <div className="flex-1 bg-white/70 rounded shadow p-4 overflow-y-auto space-y-3">
// // //         {messages.map((msg, i) => (
// // //           <div
// // //             key={i}
// // //             className={msg.sender === "user" ? "user-message" : "ai-message"}
// // //           >
// // //             {msg.sender === "ai" ? (
// // //               <p>{colorizeText(msg.text)}</p>
// // //             ) : (
// // //               <p>{msg.text}</p>
// // //             )}
// // //           </div>
// // //         ))}
// // //         {loading && <p className="text-gray-500">AI is typing...</p>}
// // //       </div>

// // //       <form onSubmit={sendMessage} className="mt-4 flex">
// // //         <input
// // //           type="text"
// // //           placeholder="Ask something..."
// // //           value={input}
// // //           onChange={(e) => setInput(e.target.value)}
// // //           className="rainbow-input"
// // //         />
// // //         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r">
// // //           Send
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default AIChat;
// // import React, { useState } from "react";
// // import { toast } from "react-toastify";
// // import "../styles/aichat.css";

// // // rainbow effect disabled (plain white text)
// // function colorizeText(text) {
// //   return <span>{text}</span>;
// // }

// // const AIChat = () => {
// //   const [messages, setMessages] = useState([
// //     { sender: "ai", text: "Hi! I'm your Campus AI assistant. How can I help you?" },
// //   ]);
// //   const [loading, setLoading] = useState(false);
// //   const [input, setInput] = useState("");
// //   const [listening, setListening] = useState(false);

// //   // ✅ Speech recognition
// //   const SpeechRecognition =
// //     window.SpeechRecognition || window.webkitSpeechRecognition;

// //   const startListening = () => {
// //     if (!SpeechRecognition) {
// //       toast.error("Speech recognition not supported in this browser.");
// //       return;
// //     }
// //     const recognition = new SpeechRecognition();
// //     recognition.lang = "en-US";
// //     recognition.start();
// //     setListening(true);

// //     recognition.onresult = (event) => {
// //       const voiceInput = event.results[0][0].transcript;
// //       setInput(voiceInput);
// //       setListening(false);
// //     };

// //     recognition.onerror = (event) => {
// //       console.error("Speech recognition error", event);
// //       setListening(false);
// //     };
// //   };

// //   // ✅ Speech synthesis
// //   const speakText = (text) => {
// //     const synth = window.speechSynthesis;
// //     if (!synth) {
// //       toast.error("Speech synthesis not supported in this browser.");
// //       return;
// //     }
// //     stopSpeaking(); // cancel old speech before starting new
// //     const utterance = new SpeechSynthesisUtterance(text);
// //     utterance.lang = "en-US";
// //     synth.speak(utterance);
// //   };

// //   // ✅ Stop speaking function
// //   const stopSpeaking = () => {
// //     const synth = window.speechSynthesis;
// //     if (synth && synth.speaking) {
// //       synth.cancel();
// //     }
// //   };

// //   const sendMessage = async (e) => {
// //     e.preventDefault();
// //     if (!input.trim()) return;

// //     const newMessages = [...messages, { sender: "user", text: input }];
// //     setMessages(newMessages);
// //     setInput("");
// //     setLoading(true);

// //     try {
// //       const res = await fetch("http://localhost:5000/api/ai/ask", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //         body: JSON.stringify({ question: input }),
// //       });

// //       const data = await res.json();
// //       const aiResponse = data.answer || "No response from AI";

// //       setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);

// //       // Auto-speak AI’s response
// //       speakText(aiResponse);
// //     } catch (err) {
// //       console.error(err);
// //       toast.error("Failed to get AI response");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="aichat-container">
// //       <h3 className="text-2xl font-bold mb-4">AI Chat Assistant (with Voice)</h3>

// //       <div className="flex-1 bg-white/70 rounded shadow p-4 overflow-y-auto space-y-3">
// //         {messages.map((msg, i) => (
// //           <div
// //             key={i}
// //             className={msg.sender === "user" ? "user-message" : "ai-message"}
// //           >
// //             <p>{colorizeText(msg.text)}</p>

// //             {/* 🔊 Replay button for AI messages */}
// //             {msg.sender === "ai" && (
// //               <button
// //                 onClick={() => speakText(msg.text)}
// //                 className="ml-2 text-sm text-blue-400 hover:text-blue-600"
// //               >
// //                 🔊 Replay
// //               </button>
// //             )}
// //           </div>
// //         ))}
// //         {loading && <p className="text-gray-500">AI is typing...</p>}
// //       </div>

// //       <form onSubmit={sendMessage} className="mt-4 flex space-x-2">
// //         <input
// //           type="text"
// //           placeholder="Ask something..."
// //           value={input}
// //           onChange={(e) => setInput(e.target.value)}
// //           className="rainbow-input"
// //         />
// //         <button
// //           type="button"
// //           onClick={startListening}
// //           className="bg-green-600 text-white px-4 py-2"
// //         >
// //           🎤 {listening ? "Listening..." : "Speak"}
// //         </button>
// //         <button
// //           type="button"
// //           onClick={stopSpeaking}
// //           className="bg-red-600 text-white px-4 py-2"
// //         >
// //           🛑 Stop Voice
// //         </button>
// //         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r">
// //           Send
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AIChat;
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import "../styles/aichat.css";

// // rainbow effect disabled (plain white text)
// function colorizeText(text) {
//   return <span>{text}</span>;
// }

// const AIChat = () => {
//   const [messages, setMessages] = useState([
//     { sender: "ai", text: "Hi! I'm your Campus AI assistant. How can I help you?" },
//   ]);
//   const [loading, setLoading] = useState(false);
//   const [input, setInput] = useState("");
//   const [listening, setListening] = useState(false);

//   // ✅ Check microphone permission
//   const checkMicPermission = async () => {
//     try {
//       const status = await navigator.permissions.query({ name: "microphone" });
//       if (status.state === "denied") {
//         toast.error("❌ Microphone is blocked. Allow it from browser settings.");
//         return false;
//       }
//       return true;
//     } catch (err) {
//       console.warn("Mic permission check not supported in this browser");
//       return true; // fallback
//     }
//   };

//   // ✅ Speech recognition setup
//   const SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;

//   const startListening = async () => {
//     if (!SpeechRecognition) {
//       toast.error("Speech recognition not supported in this browser.");
//       return;
//     }

//     const hasPermission = await checkMicPermission();
//     if (!hasPermission) return;

//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.interimResults = false;
//     recognition.continuous = false;
//     recognition.start();
//     setListening(true);

//     recognition.onstart = () => {
//       console.log("🎤 Voice recognition started");
//     };

//     recognition.onresult = (event) => {
//       const voiceInput = event.results[0][0].transcript;
//       console.log("🎤 Heard:", voiceInput);
//       setInput(voiceInput);
//       setListening(false);
//     };

//     recognition.onspeechend = () => {
//       console.log("🎤 Speech ended");
//       recognition.stop();
//       setListening(false);
//     };

//     recognition.onerror = (event) => {
//       console.error("❌ Speech recognition error", event.error);
//       toast.error("Voice recognition error: " + event.error);
//       setListening(false);
//     };
//   };

//   // ✅ Speech synthesis
//   const speakText = (text) => {
//     const synth = window.speechSynthesis;
//     if (!synth) {
//       toast.error("Speech synthesis not supported in this browser.");
//       return;
//     }
//     stopSpeaking();
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "en-US";
//     synth.speak(utterance);
//   };

//   const stopSpeaking = () => {
//     const synth = window.speechSynthesis;
//     if (synth && synth.speaking) {
//       synth.cancel();
//     }
//   };

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const newMessages = [...messages, { sender: "user", text: input }];
//     setMessages(newMessages);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/ai/ask", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ question: input }),
//       });

//       const data = await res.json();
//       const aiResponse = data.answer || "No response from AI";

//       setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);

//       speakText(aiResponse);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to get AI response");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="aichat-container">
//       <h3 className="text-2xl font-bold mb-4">AI Chat Assistant (with Voice)</h3>

//       <div className="flex-1 bg-white/70 rounded shadow p-4 overflow-y-auto space-y-3">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={msg.sender === "user" ? "user-message" : "ai-message"}
//           >
//             <p>{colorizeText(msg.text)}</p>

//             {msg.sender === "ai" && (
//               <button
//                 onClick={() => speakText(msg.text)}
//                 className="ml-2 text-sm text-blue-400 hover:text-blue-600"
//               >
//                 🔊 Replay
//               </button>
//             )}
//           </div>
//         ))}
//         {loading && <p className="text-gray-500">AI is typing...</p>}
//       </div>

//       <form onSubmit={sendMessage} className="mt-4 flex space-x-2">
//         <input
//           type="text"
//           placeholder="Ask something..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="rainbow-input"
//         />
//         <button
//           type="button"
//           onClick={startListening}
//           className="bg-green-600 text-white px-4 py-2"
//         >
//           🎤 {listening ? "Listening..." : "Speak"}
//         </button>
//         <button
//           type="button"
//           onClick={stopSpeaking}
//           className="bg-red-600 text-white px-4 py-2"
//         >
//           🛑 Stop Voice
//         </button>
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AIChat;
import React, { useState } from "react";
import { toast } from "react-toastify";
import "../styles/aichat.css";

// rainbow color classes cycle
const COLORS = ["rainbow-0", "rainbow-1", "rainbow-2", "rainbow-3", "rainbow-4"];

// helper: convert plain text to spans with rainbow classes (for AI only)
function colorizeText(text) {
  const parts = text.split(/(\s+)/); // split words + spaces
  let idx = 0;
  return parts.map((part, i) => {
    if (/^\s+$/.test(part)) {
      return <span key={i}>{part}</span>;
    }
    const cls = COLORS[idx % COLORS.length];
    idx++;
    return (
      <span key={i} className={cls}>
        {part}
      </span>
    );
  });
}

const AIChat = () => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi! I'm your Campus AI assistant. How can I help you?" },
  ]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message first
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/ai/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();
      const aiResponse = data.answer || "No response from AI";

      // Append AI response
      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
    } catch (err) {
      console.error(err);
      toast.error("Failed to get AI response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="aichat-container">
      <h3 className="text-2xl font-bold mb-4">AI Chat Assistant</h3>

      <div className="flex-1 bg-white/70 rounded shadow p-4 overflow-y-auto space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.sender === "user" ? "user-message" : "ai-message"}
          >
            {msg.sender === "ai" ? (
              <p>{colorizeText(msg.text)}</p>
            ) : (
              <p>{msg.text}</p>
            )}
          </div>
        ))}
        {loading && <p className="text-gray-500">AI is typing...</p>}
      </div>

      <form onSubmit={sendMessage} className="mt-4 flex">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="rainbow-input"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r">
          Send
        </button>
      </form>
    </div>
  );
};

export default AIChat;