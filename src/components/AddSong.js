import React from 'react'
import './AddSong.css';

function AddSong() {
  return (
    <div className='parentDiv'>
        <div className='div1'>
            <div>
                <h4>Link to Image:</h4>
                <input type="text" />
            </div>
            <div>
                <h4>Song:</h4>
                <input type="text" />
            </div>
        </div>
        <div className='div1'>
            <div>
                <h4>Date of Release:</h4>
                <input type="text" />
            </div>
            <div>
                <h4>Artist Name:</h4>
                <input type="text" />
            </div>
        </div>
        <div className='div1'>
            <div>
                <h4>Rate:</h4>
                <input type="number" />
            </div>  
        </div>
        <div className='div1'>
              <button type='button'>Submit</button>
        </div>
    </div>
  )
}

export default AddSong;