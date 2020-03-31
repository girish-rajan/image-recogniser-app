import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm=({onInputChange, onButtonClick} )=>{
    return <div >
       
        <p className='f3 tc pa1 mv0'> 
        This magic brain will detect faces in your pictures. Give it a try.
        </p>
        <div className="center flex items-center">
        <div className="flex center pa4 br3 form">
            <input type="text" id="inputtext" className='w-70 f4 pv0 ' onChange={onInputChange} />
            <button onClick={onButtonClick} className='w-30 f4 pv1 dib grow white bg-light-purple' >Detect</button>
        </div>
        </div>
    </div>
}

export default ImageLinkForm;