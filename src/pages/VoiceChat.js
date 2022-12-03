import React, { useRef , useEffect, useState } from 'react';

// packages to transform voice to text and text to voice
import { useSpeechSynthesis } from 'react-speech-kit';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// bubble messages components 
import BubbleBot from '../components/voiceChat/BubbleBot';
import BubbleUser from '../components/voiceChat/BubbleUser';
// styles
import   "../styles/voice_chat.css"
// video animations :
import staticLogoAnimation from "../../src/assets/static.mp4"
import voiceVibes from "../../src/assets/voiceVibes.mp4"

const VoiceChat = () => {

  const ref = useRef(null)
  const commands = [{command : '*' , callback : (vocalMessage) => { addBubble(`${vocalMessage}`) }}]
  const [isVocal , setIsVocal ] = useState(true)
  const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition({commands});

  const [questions , setQuestion] = useState([])

  const addBubble = (text)=> {
    if (text) {
      setQuestion([ ...questions , {text:text ,response:`Hey i just answered you question`}])
      resetTranscript()
      speak({ text: `Hey i just answered you question`, voice: voices[2] })

    }
  }


  const { speak, voices} = useSpeechSynthesis();


 
// in case the user want to input his data manually (txt)
  useEffect((e) => {
    const handlePressingKey = e => {
     if (!listening){

        var input = document.getElementById("questionInput")
        if(input)  {
          input.focus();
        }

        if (e.keyCode == 13) {
          
          if (input && input.value){
            addBubble(input.value)
          }
        
          setIsVocal(!isVocal)


        }else{
          setIsVocal(false)
        } 
      }
    };

    
    document.addEventListener("keypress" , handlePressingKey)

    return () => {
      document.removeEventListener('keypress', handlePressingKey);
    };
  
  }, [isVocal,listening]);





    // handling errors :
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }




  

  
  return ( 
    <div className=" relative pt-8 bg-black flex justify-top items-center flex-col h-screen  " >
      <div className="shadow-top-down h-full flex flex-row items-center justify-center">
        <div id='scroller-container' className="flex flex-col  max-h-[480px]  overflow-y-auto px-0 sm:px-10 overflow-x-hidden ">

          {questions.map((message,index)=> (
              <>
                <BubbleUser  text = {message.text}   key={index*2}/>
                <BubbleBot  text = {message.response}   key={index*2+1}/>
              </>
          ))}
          

        </div>
      </div>

    
      {isVocal &&
        <div id='voice-controls' >
        {listening &&
          <button onClick={SpeechRecognition.stopListening}  className="mb-6">
            <video width={"380" } autoPlay loop muted>
                <source src={ voiceVibes} type="video/mp4"/>
            </video> 
          </button>
        }
        
        
        {!listening &&
          <button onClick={SpeechRecognition.startListening} className="mb-6">  
              <video width={ "200"} autoPlay loop muted>
                  <source src={ staticLogoAnimation} type="video/mp4"/>
              </video>
          </button>
        }  
      </div>

    }
    

    {!isVocal && 
      <div id="input-controls" className={!isVocal ? "block" : "hidden"}>
        <input id="questionInput" type="textfield" className="w-[600px] p-4 bg-black text-white font-[26px] border border-white mb-6" ></input>
      </div>
    }

    

        

    </div>
   );
}
 
export default VoiceChat;
