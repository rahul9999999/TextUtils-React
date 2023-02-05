import React, {useState} from 'react'

export default function Textform(props) {
    const onHandChange=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        {props.showAlert('Converted to Uppercase','success')}
    }
    const onHandLowChange=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        {props.showAlert('Converted to Lowercase','success')}
    }
    const ClearAuto=()=>{
        let newText=" ";
        setText(newText)
        {props.showAlert('Clear Successfully','success')}
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)

    }
    const [text,setText]=useState('')
    return (
        <>
        <div style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"
                 style={{backgroundColor: props.mode==='dark'?'gray':'white'}}></textarea>
            </div>
            <button className='btn btn-primary' onClick={onHandChange}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-4' onClick={onHandLowChange}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-4' onClick={ClearAuto}>Clear All</button>

        </div>
        <div className="container my-4 " style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Your Text summary</h1>
            <p>{text.split(" ").length} Words and {text.length} characters</p> 
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Type somthing to preview'}</p>
        </div>
        </>
    )
}
