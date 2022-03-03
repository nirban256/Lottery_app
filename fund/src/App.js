import './index.css';
import './App.css';

const App = () => {
  return (
    <div className="text-yellow-400 flex flex-col text-center align-middle justify-center">
      <h1 className="text-5xl font-bold my-5">
        Funding for A Cause
      </h1>
      <p className="font-bold text-3xl">
        Contract Balance: 20 Ether
      </p>
      <div className="flex flex-col align-middle justify-center">
        <p className="my-2">
          Cause for funding: <input type="text" name="description" className="px-1 py-1" placeholder="Enter the cause for raising funding" width={50} />
        </p>
        <p className="my-2">
          Total amount require: <input type="number" name="target" placeholder="Enter the total amount you want to raise" />
        </p>
        <p className="my-2">
          Last date to fund: <input type="time" name="deadline" placeholder="Enter the time limit for funding" />
        </p>
        <div>
          <button type="submit" className="px-1 py-1 mx-2 my-2 bg-yellow-500 text-white">Connect To Metamask</button>
          <button type="submit" className="px-1 py-1 my-2 bg-yellow-500 text-white">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
