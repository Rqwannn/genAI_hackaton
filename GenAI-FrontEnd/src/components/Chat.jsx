import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { axios } from "../axios/config";

Chat.propTypes = {
  tabBarIndex: PropTypes.any.isRequired,
};

function Chat({ tabBarIndex }) {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]); // Initialize chats as an empty array

  // useEffect(() => {

  // }, []); // Empty dependency array means this effect will only run once (like componentDidMount in classes)

  const handleSubmit = (event) => {
    event.preventDefault();

    const HEADER_CONFIG = {
        headers: {
            "Accept" : "application/json",
        }
    }

    const body  = {
      "question": message
    }

    axios
      .post("/chat", body, HEADER_CONFIG)
      .then((response) => {
        console.log(response);
        setChats((prevChats) => [...response.data, ...prevChats]);
        // setChats([{ question: "aklsjdlaskjdls", answer: "alskdjaskjdlaksjd" }]);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    // Handle the form submission here
    // For example: send the message to the server
    // console.log(message);

    // Clear the input field
    setMessage("");
  };

  const handleInput = (event) => {
    event.target.style.height = "auto";
    let lineHeight = parseFloat(getComputedStyle(event.target).lineHeight);
    let maxLines = 4;
    let maxHeight = lineHeight * maxLines;
    let newHeight = event.target.scrollHeight;
    if (newHeight > maxHeight) {
      newHeight = maxHeight;
      event.target.style.overflowY = "scroll";
    } else {
      event.target.style.overflowY = "hidden";
    }
    event.target.style.height = `${newHeight}px`;
  };

  return (
    <div>
      <iframe src="http://8.222.185.57:8501" className="h-full max-h-screen w-[480px] pt-19" frameborder="0"style={{
        // width: "480px",
        // height: "100%",
      }}></iframe>
    </div>
    // <div
    //   className={`${
    //     tabBarIndex == 0
    //       ? "flex flex-col w-full"
    //       : "hidden md:flex md:flex-col w-full"
    //   } md:w-1/2 lg:w-1/3 pt-16 h-screen justify-between border-l border-gray-200`}
    // >
    //   <div className="flex flex-col-reverse h-full max-h-screen overflow-y-auto px-6 pb-1 pt-6">
    //     {chats.map((chat, index) => {
    //       return (
    //         <div key={index} className="">
    //           <User question={chat.question} />
    //           <AILLM>
    //             <Typewriter text={chat.answer} delay={40} />
    //           </AILLM>
    //         </div>
    //       );
    //     })}
    //   </div>
    //   <div className="relative p-6">
    //     <button
    //       type="submit"
    //       className="absolute inset-y-0 right-10 flex items-center"
    //       onClick={handleSubmit}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth={1.5}
    //         stroke="currentColor"
    //         className="w-4 h-4 text-gray-500"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
    //         />
    //       </svg>
    //     </button>
    //     <form onSubmit={handleSubmit} className="w-full">
    //       <textarea
    //         value={message}
    //         onChange={(e) => setMessage(e.target.value)}
    //         onInput={handleInput}
    //         className="bg-gray-50 border border-gray-300 text-base font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full pr-10 p-2.5 resize-none"
    //         placeholder="Write something amazing"
    //       />
    //     </form>
    //   </div>
    // </div>
  );
}

User.propTypes = {
  question: PropTypes.string.isRequired,
};

function User({ question }) {
  return (
    <div className="bg-blue-500 border border-blue-600 text-white rounded-lg ml-20 mb-3 px-3 py-2">
      <p className="font-normal text-base">{question}</p>
    </div>
  );
}

AILLM.propTypes = {
  children: PropTypes.object,
};

function AILLM({ children }) {
  return (
    <div className="bg-gray-50 border border-gray-300 rounded-lg mr-20 mb-4 px-3 py-2">
      {children}
    </div>
  );
}

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.any.isRequired,
  infinite: PropTypes.bool.isRequired,
};

function Typewriter({ text, delay, infinite }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing logic goes here
  useEffect(() => {
    let timeout;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentText("");
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span className="font-normal text-base">{currentText}</span>;
}

export default Chat;
