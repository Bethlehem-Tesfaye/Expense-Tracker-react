import Header from "./components/Header"
import Balance from "./components/Balance"
import Income from "./components/Income"
import History from "./components/History"
import Add from "./components/Add"
function App() {
    return(
      <div className="container">
        <Add>
          <Header/>
          {/* <Balance></Balance> */}
          <Income/>
          <History/> 
        </Add> 
        </div>
    )
}

export default App
