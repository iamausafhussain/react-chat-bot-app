import { useState } from "react";
import "./App.css";
import chatbot from "./images/chatbot.png";

const App = () => {
  const date = new Date();
  const hour = date.getHours();
  const second = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [time, setTime] = useState(`${hour}:${second}`);
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${day} ${year}`
  );

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Wednesday, 1 Aug 2022") {
      isActive = false;
    }
    const status = document.querySelector(".status");
    if (isActive === true) {
      status.innerHTML = "Active";
      status.style.color = "green";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };

  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const humanMessage = document.querySelector("#message2");

    let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense"];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = "Typing...";

      setTimeout(() => {
        botMessage.innerHTML = "Please do not use bad words";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Hello there, how are you?";
        document.querySelector("#input").value = "";
        status.innerHTML = "Active";
        status.style.color = "green";
      }, 2000);
    }

    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Bye, have a nice day!!";
        document.querySelector("#input").value = "";
      }, 2000);
      setTimeout(() => {
        status.innerHTML = "Not Active";
        status.style.color = "red";
      }, 5000);
    }

    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerText = "Typing...";
      setTimeout(() => {
        botMessage.innerText = "I am fine, thank you";
        status.innerText = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      botMessage.innerText = "Typing...";
      setTimeout(() => {
        botMessage.innerText = "😁";
        document.querySelector("#input").value = "";
      }, 1000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      botMessage.innerText = "Typing...";
      setTimeout(() => {
        botMessage.innerText = "That is good";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      botMessage.innerText = "Typing...";
      setTimeout(() => {
        botMessage.innerText = "My name is Bot";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      botMessage.innerText = "Typing...";
      setTimeout(() => {
        botMessage.innerText = "The owner of this bot is Ausaf";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let owner2 = ["Who's Ausaf|who's Ausaf|Who is Ausaf|who is Ausaf"];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      botMessage.innerText = "Typing...";
      setTimeout(() => {
        botMessage.innerText =
          "you can find him here!! https://iamausafhussain.netlify.app";
        document.querySelector("#input").value = "";
      }, 2000);
    }

    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
    ]; //adding the age-question
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      // if the input contains some question
      botMessage.innerText = "Typing...";
      setTimeout(() => {
        botMessage.innerText = "I am 1 year old";
        document.querySelector("#input").value = "";
      }, 2000);
    }
    humanMessage.innerHTML = document.querySelector("#input").value;
  };

  return (
    <div className="App" onLoad={checkStatus}>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={chatbot} alt="chatlogo" />
            </div>
            <div className="right">
              <div className="name">Chatbot</div>
              <div className="status">Active</div>
            </div>
          </div>

          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div className="bot-message" id="message1"></div>
                <div className="human-message" id="message2"></div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input type="text" id="input" placeholder="Enter message" />
              </div>
              <div className="btn">
                <button onClick={handleInput}>
                  <i className="fa-solid fa-paper-plane"></i> Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
