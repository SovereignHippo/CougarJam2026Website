import React, { useState, useEffect } from "react";
import '../../App.css'
import {textAdventure, textAdventureTrueEnding} from "../../data/textAdventure";

const typingSounds = [
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

const terminalSound = new Audio('/sounds/electronic-keystrokes.wav');
terminalSound.loop = true;
terminalSound.volume = .5;

export default function Terminal() {

    const [message, setMessage] = useState("");

    const [messageLog, setMessageLog] = useState([{}]);

    const [currentDialogue, setCurrentDualogue] = useState((localStorage.getItem('endingsFound') == "1111" && textAdventureTrueEnding) || textAdventure);

    const [endingsFound, setEndingsFound] = useState(localStorage.getItem('endingsFound') || "0000")

    const terminalDisplay = document.getElementById('terminal-display-box')

    const delay = ms => new Promise(res => setTimeout(res, ms));

    let isSkipPressed = false;

    document.addEventListener("keydown", (event) => {
        if(event.key == "ArrowRight" || event.key == "ArrowDown" || event.key == "Shift"){
            isSkipPressed = true;
        }
        
    })
    document.addEventListener("keyup", (event) => {
        if(event.key == "ArrowRight" || event.key == "ArrowDown" || event.key == "Shift"){
            isSkipPressed = false;
        }
        
    })


    function handleChange(event){
        setMessage(event.target.value);
        typingSounds[Math.floor(Math.random() * typingSounds.length)].play();
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
        if(currentDialogue.ending){
            
        }
    },[currentDialogue])

    async function DisplayCurrentDialouge(){
        let output = currentDialogue.prompt;
        let owner = "bot";

        

        if(currentDialogue.owner){
            //overide the owner tag if it has one
            owner = currentDialogue.owner;
        }

        //check if there are options
        if(currentDialogue.options){
            for(let item of currentDialogue.options){
            
                output += "\n-" + item.choice;
            }
            await TypeResponse(output, owner);
        }else{
            //if no options go on
            await TypeResponse(output, owner);
            if(currentDialogue.fnc && currentDialogue.fnc(message)){
                //runs fnc
            }else{
                //only do check answer if it is not open eneded
                //wait a beat before doing next line
                await delay(450);
                CheckAnswer();
            }
            
        }

        if(currentDialogue.ending){
            UpdateEndings(currentDialogue.ending);
        }
        
        
        
    }

    function CheckAnswer(){
        if(currentDialogue.options){//check if there are options
            for(let item of currentDialogue.options){
                if(item.choice.toLowerCase() == message.toLowerCase() || item.choice[0].toLowerCase() == message[0].toLowerCase()){
                    (currentDialogue.fnc && currentDialogue.fnc(message))
                    setCurrentDualogue(item.next);
                    return;
                }
            }//if the loop does not return that means they entered an invalid answer
            setMessageLog([...messageLog,{message: message, owner: "user"}, {message: "Sorry, what was that?", owner: "bot"}])
        }else if(currentDialogue.next){//make sure its not the end
            //there are no options
            //it is either open ended or need to immidiatly go to the next prompt
            (currentDialogue.fnc && currentDialogue.fnc(message))
            setCurrentDualogue(currentDialogue.next);
            
        }
        
         
    }

    function UpdateScrollHeight(){
        if(terminalDisplay){
            terminalDisplay.scrollTop = terminalDisplay.scrollHeight;
        }
    }

    async function TypeResponse(message, owner){

        messageLog.push("");
        var letterCount = 1;

        //start the terminal sound
        
        if(message.length > 3){
                //dont play for short messages, its annoying
                terminalSound.play().catch(error => {
                //console.log("Sound Error for Terminal: " + error);
            })
        }

        while(letterCount <= message.length){
            if(isSkipPressed){
                messageLog[messageLog.length-1] = {message: message, owner: owner};
                setMessageLog([...messageLog]);
                break;
            }
            messageLog[messageLog.length - 1] = {message: message.slice(0,letterCount), owner: owner};
            letterCount++;
            setMessageLog([...messageLog]);
            //time between each letter
            await delay(40);
        }
        //stop the termianl sound
        terminalSound.pause();
        terminalSound.playbackRate = 1; //reset playback rate


        setMessageLog(messageLog);
    }

    function UpdateEndings(newEnding){
        let temp = "";
        let endingsFoundCounter = 0;
        for(let i = 0; i < newEnding.length; i++){
            if(newEnding[i] == '1' || endingsFound[i] == '1'){
                temp = temp + '1';
                endingsFoundCounter++;
            }else{
                temp = temp + '0';
            }
        }

        

        if(endingsFoundCounter == 4){
            //all endings have been found
            setCurrentDualogue({prompt:`All Endings Found, secret ending unlocked!`, owner:"bot-good"});
        }else{
            setCurrentDualogue({prompt:`Endings Found ${endingsFoundCounter}/4`, owner:"bot-good"});
        }

    
        
        setEndingsFound(temp);
        localStorage.setItem('endingsFound',temp);
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