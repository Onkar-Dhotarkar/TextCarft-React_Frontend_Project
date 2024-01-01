import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('Enter text here');
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been converted to the Uppercase","success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text has been converted to the LowerCase","success");

    }

    const handleCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been Copied to clickBoard","success");

    }

    const handleBold = () => {
        setIsBold(!isBold);
        props.showAlert("Text has been Converted into Bold","success");

      };
      
    const handleItalic = () => {
        setIsItalic(!isItalic);
        props.showAlert("Text has been Converted into Italic","success");

      };

    const handleOnClick = (event) => {
        setText(event.target.value)
    }
    const clear = ()=>{
        setText('');
        props.showAlert("Text has been Cleared","success");

    }
    const handleTitleCaseClick = () => {
        let newText = text.toLowerCase().replace(/\b(\w)/g, (char) => char.toUpperCase());
        setText(newText);
        props.showAlert('Text has been converted to Title Case', 'success');
      };


    
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control p-3" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black',  fontWeight: isBold ? 'bold' : 'normal' ,fontStyle: isItalic ? 'italic' : 'normal'}} value={text} onChange={handleOnClick} id="exampleFormControlTextarea1" rows="9" ></textarea>


            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTitleCaseClick}>Convert to Title Case </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleBold} style={{fontWeight: 'bold'}}>Bold </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleItalic} style={{fontStyle: 'italic'}}>Italic   </button>
            
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clear}>Clear </button>
            
        </div>
        
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        
        
        </>
    )
}
