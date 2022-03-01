import './index.css';

const App = () => {
  return (
    <div className="flex flex-col text-center align-middle justify-center bg-violet-500">
      <h1 className="text-yellow-400 text-5xl font-bold my-5">
        Funding for A Cause
      </h1>
      <div className="flex  align-middle justify-center">
        <input type="text" name="description" className="px-1 py-1" placeholder="Enter the cause for raising funding" />
        <input type="number" name="target" placeholder="Enter the total amount you want to raise" />
        <input type="number" name="minimum contribution" placeholder="Enter the minimum contribution amount" />
        <input type="time" name="deadline" placeholder="Enter the time limit for funding" />
        <button type="submit" className="px-1 py-1 bg-yellow-500 text-white">Submit</button>
      </div>
    </div>
  );
}

export default App;
