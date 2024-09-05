import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'


function App() {
  const [prediction, setPrediction] = useState('');


  
  const handleVideoUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('video', file);
  
    try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: formData, // Correctly use the formData object
        });

        if (!response.ok) {
            const errorText = await response.text(); // Read the error message from response
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }
        
        const data = await response.json();
        setPrediction(data.prediction);
        console.log(data); // Log the response data
    } catch (error) {
        console.error('Error:', error);
    }

};

return (
  <>
    {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div> */}
    <Navbar />
    <Welcome /> 
    {/* <input type="file" accept="video/*" onChange={handleVideoUpload} />
    {prediction && <p>Prediction: {prediction}</p>} */}
  </>
)
}

export default App
