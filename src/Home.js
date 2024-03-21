import './App.css';
import gptLogo from "./assets/chatgpt_logo.png"
import addLogo from "./assets/add-logo.png"
import usericon from "./assets/user-icon.png"
import gpticon from "./assets/chatgpt_icon.png"
import sendicon from "./assets/sendicon.png"
import { sendMsgToOpenAI } from "./openai"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    const handleSend = async () => {
        console.log()
        const res = await sendMsgToOpenAI()
        console.log(res);
    }

    const navigateToScreen = async () => {
        // console.log("hi")
        navigate("/")

    }
    return (
        <div className='App'>
            <div className='sideBar'>
                <div className='upperSide'>
                    <div className='upperSideTop'><img src={gptLogo} className="logo" alt="Logo" /> <span className='brand'>ChatGPT </span></div>
                    <button className='midBtn'><img src={addLogo} alt="" className='addBtn' />New Chat</button>
                    <div className='upperSideBottom'>
                        <button className='query' onClick={navigateToScreen}><img src="" alt='' />AI ImageGenerator</button>
                        <button className='query'><img src="" alt='' />What is Programming ?</button>
                    </div>
                </div>
                <div className='lowerSide'>
                    <div className='listItems'><img src="" alt='' className='listItemsImg' />Home</div>
                    <div className='listItems'><img src="" alt='' className='listItemsImg' />Saved</div>
                    <div className='listItems'><img src="" alt='' className='listItemsImg' />Upgrade to Pro</div>
                </div>
            </div>

            <div className='main'>
                <div className='chats'>
                    <div className='chat'>
                        <img className='chatimg' src={usericon} alt='' /><p className='txt'>  I want to let her know how much our whole family appreciates her!</p>
                    </div>
                    <div className='chat bot'>
                        <img className='chatimg' src={gpticon} alt='' /><p className='txt'>now how much our whole family appreciates her!</p>
                    </div>
                </div>

                <div className='chatFooter'>
                    <div className='inp'>
                        <input type='text' name='' id='' placeholder='Send a message' value={input} onChange={(e) => { setInput(e.target.value) }} />
                        <button className='send' onClick={handleSend}><img src={sendicon} alt='send' /></button>
                    </div>
                    <p>ChatGPT may produce inaccurate information about people, or facts, ChatGPT March 3 version</p>
                </div>
            </div>
        </div>
    );
}

export default Home