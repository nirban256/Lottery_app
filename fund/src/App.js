import './index.css';
import './App.css';

const App = () => {
  return (
    <div className="text-yellow-400 flex flex-col text-center ">
      <h1 className="text-5xl font-bold my-5 uppercase">
        Lottery Game
      </h1>
      <p className="font-bold text-3xl">
        Prize Money: 20 Ether
      </p>
      {/*<div>
        <button type="submit" className="px-1 py-1 mx-2 my-2 bg-yellow-500 text-white" onClick={async () => {
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          console.log(accounts);
        }}>Connect To Metamask</button>
      </div>*/}
      <div>
        <input type="number" value={amount} placeholder="Enter the amount to pay" />
        <button type="submit">Pay</button>
      </div>
    </div>
  );
}

export default App;
