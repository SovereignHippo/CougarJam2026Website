import React, { useState, useEffect } from "react";
import '../../App.css'
import textAdventure from "../../data/textAdventure";

const sounds = [
    new Audio('/sounds/keypresses/keypress-001.wav'),
    new Audio('/sounds/keypresses/keypress-002.wav'),
    new Audio('/sounds/keypresses/keypress-003.wav'),
    new Audio('/sounds/keypresses/keypress-004.wav'),
    new Audio('/sounds/keypresses/keypress-005.wav'),
    new Audio('/sounds/keypresses/keypress-006.wav'),
    new Audio('/sounds/keypresses/keypress-007.wav'),
    new Audio('/sounds/keypresses/keypress-008.wav'),
    new Audio('/sounds/keypresses/keypress-009.wav'),
    new Audio('/sounds/keypresses/keypress-010.wav'),
    new Audio('/sounds/keypresses/keypress-011.wav'),
    new Audio('/sounds/keypresses/keypress-012.wav'),
    new Audio('/sounds/keypresses/keypress-013.wav'),
    new Audio('/sounds/keypresses/keypress-014.wav'),
    new Audio('/sounds/keypresses/keypress-015.wav'),
    new Audio('/sounds/keypresses/keypress-016.wav'),
    new Audio('/sounds/keypresses/keypress-017.wav'),
    new Audio('/sounds/keypresses/keypress-018.wav'),
    new Audio('/sounds/keypresses/keypress-019.wav'),
    new Audio('/sounds/keypresses/keypress-020.wav'),
    new Audio('/sounds/keypresses/keypress-021.wav'),
    new Audio('/sounds/keypresses/keypress-022.wav'),
    new Audio('/sounds/keypresses/keypress-023.wav'),
    new Audio('/sounds/keypresses/keypress-024.wav'),
    new Audio('/sounds/keypresses/keypress-025.wav'),
    new Audio('/sounds/keypresses/keypress-026.wav'),
    new Audio('/sounds/keypresses/keypress-027.wav'),
    new Audio('/sounds/keypresses/keypress-028.wav'),
    new Audio('/sounds/keypresses/keypress-029.wav'),
    new Audio('/sounds/keypresses/keypress-030.wav'),
    new Audio('/sounds/keypresses/keypress-031.wav'),
    new Audio('/sounds/keypresses/keypress-032.wav'),
];

export default function Terminal() {

    const [message, setMessage] = useState("");

    const [messageLog, setMessageLog] = useState([{}]);

    const [currentDialogue, setCurrentDualogue] = useState(textAdventure);

    const terminalDisplay = document.getElementById('terminal-display-box')

    const delay = ms => new Promise(res => setTimeout(res, ms));


    function handleChange(event){
        setMessage(event.target.value);
        sounds[Math.floor(Math.random() * sounds.length)].play();
    }

    async function handleSubmit(event){
        event.preventDefault();
        //messageLog.push({message: message, owner: "user"});
        setMessageLog([...messageLog,{message: message, owner: "user"}]);
        setMessage("");

        await delay(500);

        CheckAnswer();
    }

    useEffect(()=>{
        //scroll down when new things are added
        UpdateScrollHeight();
        
    },[messageLog])

    useEffect(() => {
        DisplayCurrentDialouge();
    },[currentDialogue])

    function DisplayCurrentDialouge(){
        let output = currentDialogue.prompt;
        for(let item of currentDialogue.options){
            
            output += "\n-" + item.choice;
        }
        setMessageLog([...messageLog, {message: output, owner: "bot"}]);
    }

    function CheckAnswer(){
        for(let item of currentDialogue.options){
            if(item.choice.toLowerCase() == message.toLowerCase()){
                currentDialogue.fnc(message)
                setCurrentDualogue(item.next);
                return;
            }
        }
        //no matches were found
        if(!currentDialogue.fnc(message)){ //check if it was a open ended quesiton
            if(currentDialogue.next || currentDialogue.options.length > 0){ //check to see if there is more dilogue. If not it stops responding
                setMessageLog([...messageLog,{message: message, owner: "user"}, {message: "Sorry, what was that?", owner: "bot"}])
            }
        }else{
            //move to the next dialoge
            setCurrentDualogue(currentDialogue.next);
        }
        
         
    }

    function UpdateScrollHeight(){
        if(terminalDisplay){
            terminalDisplay.scrollTop = terminalDisplay.scrollHeight;
        }
    }


    return(
        <div className="terminal">
            <div className="terminal-display" id="terminal-display-box">
            {messageLog.map((item,index) => (
                <p key={index} className={item.owner} >{item.message}</p>
            ))}
            </div>
            <div className="terminal-input-box">
                <form onSubmit={handleSubmit}>
                    <label>
                        <input name="terminalInput" onChange={handleChange} autocomplete="off" value={message}/>
                    </label>
                </form>
            </div>
            
        </div>
        
    )
}