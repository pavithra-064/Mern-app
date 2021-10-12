import "./App.css";
import { useEffect, useRef, useState } from "react";
import Axios from 'axios';
import history from './history';

const accessToken = "4993dc22134c116d35c28dea1f969926b8e66447";

function App3() {
	const [longUrl, setLongUrl] = useState("");
	const [errMess, setErrMess] = useState("");
	const [shortenedUrl, setShortenedUrl] = useState("");
	const shortenedinput = useRef(null);
   //const[shortUrl,setShortUrll]=useState("");
	const shortid = require("shortid"); 
	const baseUrl="https://mern-crud-url.herokuapp.com"; 
	const urlCode = shortid.generate(); 
   
	const [shortUrl,setShortUrl] = useState("");
	const submitre = () =>{
	   Axios.post("https://mern-crud-url.herokuapp.com/api/url", {
		 longUrl:longUrl,
		 shortenedUrl:shortenedUrl
	 })
	  };
   

	useEffect(() => {
		if (errMess) {
			const timeout = setTimeout(() => {
				setErrMess("");
			}, 3000);
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

	function handleSubmit(e) {
		const shortcode=baseUrl + "/" + urlCode;
		setShortUrl(shortcode);
		e.preventDefault();
		if (longUrl) {
			const url = {
				long_url: longUrl,
			};
			shortenUrl(url);
		} else {
			setErrMess("Please Enter a link");
		}
	}

	async function shortenUrl(url) {
		setShortenedUrl("");
		fetch("https://api-ssl.bitly.com/v4/shorten", {
			method: "POST",
			headers: {
				mode:"no-cors",
				Accept:"application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify(url),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.link) {
				    //console.log(shortUrl);
					setShortUrl(data.link);
					setShortenedUrl(data.link);
				} else {
					setErrMess("Unable to provide short link");
				}
			});
	}
	return (
		<main className="mainn">
			<button class="btn" onClick={() => history.push('/')}>Logout</button>
		<header className="header">
			<h2>Create Short URL</h2>
		</header>
		<section className="App">
            <div className="form">
			<h2 className="labell">Paste your long URL here:</h2>
			<p className="error-message">{errMess}</p>
			<div className="input">
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<input
							type="text"
							placeholder="long url"
							value={longUrl}
							onChange={(e) => setLongUrl(e.target.value)}
						/>
						<button type="submit" id="create-short-url"  >Shorten</button>
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