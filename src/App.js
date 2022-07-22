import { Container } from "@mui/system";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigation } from "./components";
import Main from "./pages/Main";



const BASE_URL = "https://api.exchangerate.host/latest?";


function App() {
  const [customOption, setCustomOption] = useState([]);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [exchange, setExchange] = useState();
  const [amount, setAmount] = useState(1);
  const [fromAmount, setFromAmount] = useState(true);

  let inputFrom, inputTo

  if (fromAmount) {
    inputFrom = amount;
    inputTo = amount * exchange;

  }

  else {
    inputTo = amount
    inputFrom = amount / exchange

  }

  const getLatestCours = async()=>{

     try{
     await axios.get(BASE_URL)
      .then(resp => {
        const firstElement = Object.keys(resp.data.rates)[0]
        setCustomOption([resp.data.base, ...Object.keys(resp.data.rates)])
        setFrom(resp.data.base)
        setTo(firstElement)
        setExchange(resp.data.rates[firstElement])
      })
     }
     catch(e){
      alert(e)
     }
  }

  useEffect(() => {
   getLatestCours()
  }, [])

  useEffect(() => {
    if (from != null && to != null) {
      axios.get(`${BASE_URL}?base=${from}&symbols=${to}`)
        .then(resp => { setExchange(resp.data.rates[to]) });
    }
  }, [from, to])


  const handleFrom = (target) => {
    setAmount(target)
    setFromAmount(true)

  }

  const handleTo = (target) => {
    setAmount(target)
    setFromAmount(false)

  }

  const handleSelectFrom = (target) => {
    setFrom(target)
  }

  const handleSelectTo = (target) => {
    setTo(target)
  }


  return (
    <>
      <Navigation />
      <Container maxWidth="lg" >
        <Main handleSelectFrom={handleSelectFrom} handleSelectTo={handleSelectTo} handleTo={handleTo} handleFrom={handleFrom} options={customOption} from={from} to={to} inputFrom={inputFrom} inputTo={inputTo}></Main>
      </Container>

    </>
  )
}

export default App;
