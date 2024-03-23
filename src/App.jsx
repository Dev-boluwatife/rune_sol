import "./App.css";
// import bg from './assets/bg.jpg';
import sm from "./assets/sm.jpg";

function App() {
  return (
    <div className="App flex flex-col justify-center overflow-x-hidden items-center">
      {/* PRESALE NOTIFICATION IN RED BACKGROUND */}
      <div className="pt-8">
        <p className="text-xl py-1 bg-[#FEBD59] text-white font-semibold px-6 w-fit">
          The presale begins on March 25th at 10:00 GMT
        </p>
      </div>

      {/* THE BIG IMAGE ON THE HERO PAGE */}
      <div className="pt-20">
        <img src={sm} alt="" className="h-[300px]" />
      </div>

      {/* WELCOME MESSAGE AND INTRO */}
      <div className="pt-20 w-full flex flex-col justify-center items-center">
        <h2 className="text-3xl">
          Welcome to <span className="font-bold">Nothingwifhat</span>
        </h2>

        <p className="pt-6 lg:w-[50%] md:w-[70%] w-[90%] text-[20px]">
          Nothing isn't literally just an empty space wif a hat, its a symbol of
          futuristic progress made wif Nothing, from nothing. Its clear that the
          future belongs to people who embrace great innovations like $WIF and
          $NWIF . Lets pave a new era together
        </p>
      </div>

      {/* BUTTONS FOR SCROLL SPY */}

      <div className="pt-20 flex flex-wrap lg:w-[50%] md:w-[70%] w-[90%] md:gap-16 gap-8 justify-center items-center">
        <a
          id="presale"
          href="#presale"
          className="w-fit md:py-6 py-3 md:px-16 px-8 bg-[#FEBD59] text-black hover:text-[#3f3629] rounded-lg hover:bg-transparent border border-[#FEBD59]"
        >
          Presale
        </a>
        <button className="w-fit md:py-6 py-3 md:px-16 px-8 bg-[#FEBD59] text-black hover:text-[#FEBD59] rounded-lg hover:bg-transparent border border-[#FEBD59]">
          About
        </button>
        <button className="w-fit md:py-6 py-3 md:px-16 px-8 bg-[#FEBD59] text-black hover:text-[#FEBD59] rounded-lg hover:bg-transparent border border-[#FEBD59]">
          Team
        </button>
        <button className="w-fit md:py-6 py-3 md:px-16 px-8 bg-[#FEBD59] text-black hover:text-[#FEBD59] rounded-lg hover:bg-transparent border border-[#FEBD59]">
          Roadmap
        </button>
        <button className="w-fit md:py-6 py-3 md:px-16 px-8 bg-[#FEBD59] text-black hover:text-[#FEBD59] rounded-lg hover:bg-transparent border border-[#FEBD59]">
          How it works
        </button>
        <button className="w-fit md:py-6 py-3 md:px-16 px-8 bg-[#FEBD59] text-black hover:text-[#FEBD59] rounded-lg hover:bg-transparent border border-[#FEBD59]">
          Bonus
        </button>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 lg:w-[50%] md:w-[70%] pt-20 w-[90%]">
        <div className="flex flex-col">
          <div className="bg-[#E3E3E3] py-4 font-bold text-black">
            {" "}
            Price (USD)
          </div>
          <div className="bg-[#EEEFEE] py-4 font-bold text-black">
            0.00000000
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#E3E3E3] py-4 font-bold text-black"> % (24h)</div>
          <div className="bg-[#EEEFEE] py-4 font-bold text-black">▲ 0.00%</div>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#E3E3E3] py-4 font-bold text-black">
            {" "}
            Market Cap
          </div>
          <div className="bg-[#EEEFEE] py-4 font-bold text-black">0.00</div>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#E3E3E3] py-4 font-bold text-black">
            Volume (24h)
          </div>
          <div className="bg-[#EEEFEE] py-4 font-bold text-black">0.00</div>
        </div>
      </div>

      {/* PRESALE COMPONENTS */}
      <div
        id="presale"
        className="flex flex-col w-full justify-center items-center pt-20"
      >
        <div className="bg-yellow-400 lg:w-[90%] w-full py-5 rounded-md text-3xl font-bold">
          Presale
        </div>

        <div className="lg:w-[40%] md:w'[60%] w-[80%] pt-10 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Status</p>
            <p>Waiting</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Ticker</p>
            <p>Waiting</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Start</p>
            <p>Waiting</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">End *</p>
            <p>Waiting</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Blockchain</p>
            <p>Waiting</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Minimum Purchase</p>
            <p>Waiting</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Hard Cap</p>
            <p>Waiting</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Soft Cap</p>
            <p>Waiting</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Capped Supply</p>
            <p>Waiting</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Liquidity Pool</p>
            <p>Waiting</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Presale</p>
            <p>Waiting</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Marketing Bonus **</p>
            <p>Waiting</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Development</p>
            <p>Waiting</p>
          </div>
        </div>

        <div className="flex flex-col lg:w-[50%] md:w-[70%] w-full pt-20">
          <div className="bg-[#E3E3E3] py-4 font-bold text-black">
            {" "}
            Send SOL to:
          </div>
          <div className="bg-[#EEEFEE] text-center md:text-[16px] text-[14px] py-4 font-bold text-black">
            4rQkamNGwJW7ZqomadmFMfahE3gEgAvzaYMUekdon5r1
          </div>
        </div>

        <div className="pt-20 lg:w-[50%] md:w-[70%] w-[90%]">
          <i className="text-lg lg:w-[50%] md:w-[70%] w-[90%]">
            Please note that all SOL sent before and after the scheduled launch
            date will be fully refunded upon the official launch of EGG. Make
            sure to adhere to the start and end dates to avoid any
            inconvenience.
          </i>
        </div>
      </div>
    </div>
  );
}

export default App;
