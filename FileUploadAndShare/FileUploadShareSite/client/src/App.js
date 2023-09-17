import { useRef, useState, useEffect } from 'react';
import './App.css';

import { uploadFile } from './Service/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  // const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
        // console.log(response);
      }
    }
    getImage(); //calling function
  }, [file])

  //console.log(file); //show name of file which uploaded
  
  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    
      <div className='main-wrapper' style={{ backgroundImage: `url('https://images.pexels.com/photos/23547/pexels-photo.jpg')` }}>
        <div className='container'>
          <div className='wrapper'>
            <h1>AlgoU file sharing App!</h1>
            <p>Upload and share the download link.</p>
            <button onClick={() => onUploadClick()}>Upload</button>
            <input 
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }} 
              onChange={(e) => setFile(e.target.files[0])}
              />
              
              <a href={result} rel="noopener noreferrer" target='_blank'>{result}</a> 
          </div>
        </div>
      </div>
    
  );
}

export default App;
