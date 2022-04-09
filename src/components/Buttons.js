import './App.css';
import {useState, useEffect} from "react"; 
import {storage} from '../firebase'
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import {v4} from 'uuid';

function Buttons() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/")
  
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [ url, ...prev])
      })
    }); 
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [url, ...prev])
        })
      })
    })
  }, [])

  return (
    <div className="App">
      <h1>PixelGram</h1>
      
      <div className='buttons_container'>
        <input type='file' onChange={(event) => {setImageUpload(event.target.files[0])}}/>
        <button id='upload_button' onClick={uploadImage}>Upload</button>
      </div>

    <div id='image_gallery'>
      {imageList.map((url) => {
        return <img src={url}/>
      })}
    </div>
    </div>
  );
}

export default Buttons;