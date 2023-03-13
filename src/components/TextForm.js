import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to upper case", 'success')
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleClear = () => {
    let newText = ''
    setText(newText)
  }

  const [text, setText] = useState('')
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" placeholder='Enter Text Here' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear text</button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(' ').filter((element) =>{return element.length!==0} ).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(' ').filter((element) =>{return element.length!==0} ).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : 'Enter above to view Text'}</p>
      </div>
    </>
  )
}
