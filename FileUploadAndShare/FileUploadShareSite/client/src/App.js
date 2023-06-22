import logo from './logo.svg';
import './App.css';
import {useRef, useState} from 'react';

function App() {
  const [file,setFile] = useState();
  const fileInputRef = useRef();

  const onUploadClick = ()=>{
    fileInputRef.current.click();
  };

  return (
    <>
      <div className='main-wrapper' style={{ backgroundImage: `url('https://images.pexels.com/photos/23547/pexels-photo.jpg')` }}>
        <div className='container'>
          <div className='wrapper'>
            <h1>AlgoU file sharing App!</h1>
            <p>Upload and share the download link.</p>
            <button onClick={()=>onUploadClick()}>Upload</button>
            <input type='file' style={{display:"none"}} ref={fileInputRef}
            onChange={(e) =>setFile(e.target.files[0])}></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
