import {useRef} from 'react';
const ShowInputConsoleWithoutUseState = () =>{
       let inputRef = useRef();
       let messageRef = useRef();
       const showInp = () => {
              console.log(`value:${inputRef.current.value} length:${inputRef.current.value.length}`);
              if (inputRef.current.value.length != 0){
                     messageRef.current.textContent = 'Open console to findout😉';
                     messageRef.current.className = 'message-show-input';
              }else{
                     messageRef.current.textContent = '';
                     messageRef.current.className = '';
              }
       }
    
       return(
              <>
                     <div className={'showInputVal'}>
                            <h1 id='title-heading'>Show the input's value and length in the console with useRef.</h1>
                            <input type="text" className={"inp"}  ref={inputRef} placeholder='Write something...' />
                            <button id='button-show-input' onClick={()=>{showInp()}}>Show</button>
                            <p ref={messageRef}></p>
                     </div>  
              </>
       );



};

export {ShowInputConsoleWithoutUseState};