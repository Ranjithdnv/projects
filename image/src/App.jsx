import "./App.css";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [videoUpload, setvideoUpload] = useState(null);
  const [videoUrls, setvideoUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const videoListRef = ref(storage, "videos/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };
  const uploadvideo = () => {
    if (videoUpload == null) return;
    const videoRef = ref(storage, `videos/${videoUpload.name + v4()}`);
    uploadBytes(videoRef, videoUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setvideoUrls((prev) => [...prev, url]);
      });
    });
  };
console.log(imageUrls)
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  const remove =(id)=>{
    const filterdata = imageUrls.filter(img =>
      img!==id
      )
    setImageUrls(filterdata)
  }
  useEffect(() => {
    listAll(videoListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setvideoUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  // const remove =(id)=>{
  //   const filterdata = imageUrls.filter(img =>
  //     img!==id
  //     )
  //   setImageUrls(filterdata)
  // }
console.log(imageUrls[1])
  return (
    <div className="App">
      <div className="appvideo">   <div className="Ap">  <form action="">
        
        <label htmlFor="ids">LOAD</label>
          <input
          type="file" id="ids" className="rrr"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        </form>
        <label htmlFor="uplod">UPLOAD</label>
        <button className="uplod" onClick={uploadFile} id="uplod"> Upload Image</button>
     </div>
    
     
     {imageUrls.map((url,id) => {
        return (
        <div className="appvideo"  key={id} >
        <video controls loop src={url} />
        <button onClick={()=>{remove(url)}}>remove </button></div>)
      })}</div>
     
        <div className="appvideo"> 
        <div className="Ap">
          <div>
           <form action="">
        <label htmlFor="idss">LOAD IMG</label>
        <input
        type="file" id="idss" className="rrr"
        onChange={(event) => {
          setvideoUpload(event.target.files[0]);
        }}
      />
      
     
     </form> </div>
     <div>
      <label htmlFor="uplodimg">UPLOAD IMG</label>
      <button className="uplod" onClick={uploadvideo} id="uplodimg"> Upload Image</button></div></div>
       
      {videoUrls.map((url,id) => {
        return (
        <div className="App"  key={id} >
        <img src={url} alt="img" />
        {/* <button onClick={()=>{remove(url)}}>remove </button> */}
        </div>)
      })}</div>
       
       

    </div>
  );
}


export default App;
