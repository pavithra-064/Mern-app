 
import "./App.css";
import { useEffect, useRef, useState } from "react";
import Axios from 'axios';
import history from './history';
 
function App3() {
    const [longUrl, setLongUrl] = useState("");
    const [errMess, setErrMess] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");
    const shortenedinput = useRef(null);
   //const[shortUrl,setShortUrll]=useState("");
    const shortid = require("shortid");
    /*const baseUrl="https://url-shortner-mern.herokuapp.com";*/
    const baseUrl = "http://127.0.0.1:5000";
   
    const [shortUrl,setShortUrl] = useState("");
    const [shortCode,setShortCode] = useState("");
    const submitre = () =>{
       Axios.post("http://localhost:5000/api/url", {
         longUrl:longUrl,
         shortenedUrl:shortCode,
         shortUrl:shortUrl
     })
      };
   
 
    useEffect(() => {
        if (errMess) {
            const timeout = setTimeout(() => {
                setErrMess("");
            }, 10000);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [errMess]);
 
    function handleCopy() {
        if (shortenedUrl) {
            navigator.clipboard.writeText(shortenedUrl);
        }
        submitre();
    }
/*
    const check =() =>{
        Axios.post("http://localhost:5000/check", {
          longUrl:longUrl,
       }).then(res =>{
           alert(res.data.message);
        if(res.data.message==="null")
        {handleSubmit();}
        else
        {setShortUrl(res.data.message);}
        console.log("pooojaa");
       })
    }
*/
       
 
     const handleSubmit=(e)=> {
        Axios.post("http://localhost:5000/check", {
            longUrl:longUrl,
         }).then(res =>{
          if(res.data.message==="null")
          {
            const urlCode = shortid.generate();
    console.log(urlCode);
        const shortcode=baseUrl + "/" + urlCode;
        setShortCode(urlCode);
        setShortUrl(shortcode);
        setShortenedUrl(shortcode);
        e.preventDefault();
          }
          else
          {
           
            setShortUrl(res.data.message);
            e.preventDefault();
            }      
    })
}
 
    return (
        <main className="mainn">
            <button className="btn" onClick={() => history.push('/')}>Logout</button>
        <header className="header">
            <h2>Create Short URL</h2>
        </header>
        <section className="App">
            <div className="form">
            <h2 className="labell">Paste your long URL here:</h2>
            <p className="error-message">{errMess}</p>
            <div className="input">
                <form>
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="long url"
                            name="fullUrl"
                            value={longUrl}
                            onChange={(e) => setLongUrl(e.target.value)}
                        />
                        <button type="button" id="create-short-url"  onClick={handleSubmit}>Shorten</button>
                       
                    </div>
                </form>
            </div>
            <div className="output">
                <p  className="labell">Short URL:</p>
                <div className="form-control">
                    <input
                        type="text"
                        name="short-url"
                       
                        value={shortUrl}
                        ref={shortenedinput}
                        onChange={(e)=>{setShortUrl(e.target.value)}}
                    />
                    <button type="button" onClick={handleCopy}>
                        Copy
                    </button>
                </div>
            </div>
            </div>
   
        </section>
    </main>
               
    );
}
 
export default App3;