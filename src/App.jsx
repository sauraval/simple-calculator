import { useState } from 'react'
import './App.css'
import { TextField, Button, Stack } from '@mui/material'

function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [validPrinciple,setValidPrinciple] = useState(true)
  const [validRate,setValidRate] = useState(true)
  const [validYear,setValidYear] = useState(true)


  const handleReset=()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setValidPrinciple(true)
    setValidRate(true)
    setValidYear(true)
  }

  const validateUserInputs=(e)=>{
    const {name,value}= e.target
    console.log(`${name} , ${typeof value}`);
    console.log(!!value.match(/^\d+\.?\d+$/));
    // valid pattern
    if(!!value.match(/^\d+\.?\d+$/)){
      if( name==='principle'){
        setPrinciple(value)
        setValidPrinciple(true)
      }else if(name==='rate'){
        setRate(value)
        setValidRate(true)
      }else{
        setYear(value)
        setValidYear(true)
      }
    }else{
  // invalid pattern
  if( name==='principle'){
    setPrinciple(value)
    setValidPrinciple(false)
  }else if(name==='rate'){
    setRate(value)
    setValidRate(false)
  }else{
    setYear(value)
    setValidYear(false)
  }
    }
    
  
  }
  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Please fill the form completely!!!")
    }else{
      setInterest(principle*rate*year/100)
    }
  }
  

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light p-5 rounded'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest Easily</p>
        <div className='d-flex justify-content-center align-items-center bg-warning mt-5 text-light shadow rounded flex-column' style={{ width: '100%', height: '150px' }}>
          <h1 style={{ height: '55px' }}>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" name='principle' value={principle || ""} onChange={e=>validateUserInputs(e)}/>
          {!validPrinciple&& <div className="mb-3 text-danger">
            Invalid Principle Amount!!!
          </div>}

          </div>
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-principle" label="Rate of Interest (%)" variant="outlined" name='rate' value={rate || ""} onChange={e=>validateUserInputs(e)} />
            {!validRate&& <div className="mb-3 text-danger">
            Invalid Rate Amount!!!
          </div>}


          </div>
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic-principle" label="Time Period (yr)" variant="outlined" name='year' value={year || ""} onChange={e=>validateUserInputs(e)} />
            {!validYear&& <div className="mb-3 text-danger">
            Invalid Year!!!
          </div>}


          </div>
          <Stack spacing={2} direction={'row'}>
            <Button type='submit' style={{height:'70px',width:'50%'}} className='bg-dark' variant="contained" disabled={validPrinciple&&validRate&&validYear?false:true}>CALCULATE</Button>
            <Button onClick={handleReset} style={{height:'70px',width:'50%'}} className='text-dark' variant="outlined">RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
