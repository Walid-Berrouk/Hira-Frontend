import React, { useState } from 'react';

// packages to transform voice to text and text to voice
import { useSpeechSynthesis } from 'react-speech-kit';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// bubble messages components 
import BubbleBot from '../components/voiceChat/BubbleBot';
import BubbleUser from '../components/voiceChat/BubbleUser';
// styles
import   "../styles/voice_chat.css"

const VoiceChat = () => {


  const commands = [{command : '*' , callback : (vocalMessage) => { addBubble(`${vocalMessage}`) }}]

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

    // handling errors :
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  
  return ( 
    <div className=" relative pt-8 bg-black flex justify-top items-center flex-col h-screen  " >
      <div className="shadow-top-down h-full flex flex-row items-center justify-center">
        <div id='scroller-container' className="flex flex-col  max-h-[480px]  overflow-y-auto sm:px-10 ">

          {questions.map((message,index)=> (
              <>
                <BubbleUser  text = {message.text}   key={index*2}/>
                <BubbleBot  text = {message.response}   key={index*2+1}/>
              </>
          ))}

        </div>
      </div>

      <button className='bg-red-600 z-50 w-20 h-20  mt-auto mb-20 hover:cursor-pointer' onClick={SpeechRecognition.startListening}>Speak</button>
      
    </div>
   );
}
 
export default VoiceChat;
