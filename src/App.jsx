import { useEffect } from "react";
import "./App.css";
import roadmap from "./assets/roadmap.png";
import sm from "./assets/hero.jpg";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbBrandTelegram, TbBrandX } from "react-icons/tb";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App flex flex-col justify-center overflow-x-hidden items-center">
      {/* PRESALE NOTIFICATION IN RED BACKGROUND */}
      <div className="pt-8">
        <p className="text-xl py-1 bg-[#000] text-white font-semibold px-6 w-fit">
          The presale begins on March 25th at 12pm UTC
        </p>
      </div>

      {/* THE BIG IMAGE ON THE HERO PAGE */}
      <div data-aos="fade-up-left" className="pt-20">
        <img src={sm} alt="" className="h-[300px] rounded-full" />
      </div>

      {/* WELCOME MESSAGE AND INTRO */}
      <div className="pt-20 w-full flex flex-col justify-center items-center">
        <h2 data-aos="fade-up" className="text-3xl">
          Welcome to <span className="font-bold">RUNE_SOL</span>
        </h2>

        <p
          data-aos="fade-up"
          className="pt-6 lg:w-[50%] md:w-[70%] w-[90%] text-[20px]"
        >
          Our token symbolizes a milestone in the mining of BTC and Runes,
          bringing you an opportunity to be part of this revolution. We've made
          it easier for you to acquire Runes by offering a BTC Runes and our
          token airdrop for presale participants.
        </p>
      </div>

      {/* BUTTONS FOR SCROLL SPY */}

      <div className="pt-20 flex flex-wrap lg:w-[50%] md:w-[70%] w-[90%] md:gap-16 gap-8 justify-center items-center">
        <a
          href="#presale"
          data-aos="flip-up"
          className="w-fit md:py-6 py-3 md:px-16 px-8 bg-[#000] text-white hover:text-[#3f3629] rounded-lg hover:bg-transparent border border-[#000]"
        >
          Presale
        </a>
        <a
          href="#about"
          data-aos="flip-up"
          className="w-fit md:py-6 py-3 md:px-16 px-8 bg-[#000] text-white hover:text-[#000] rounded-lg hover:bg-transparent border border-[#000]"
        >
          About
        </a>
        <a
          href="#team"
          data-aos="flip-up"
          className="w-fit md:py-6 py-3 md:px-16 px-8 bg-[#000] text-white hover:text-[#000] rounded-lg hover:bg-transparent border border-[#000]"
        >
          Team
        </a>
        <a
          href="#roadmap"
          data-aos="flip-up"
          className="w-fit md:py-6 py-3 md:px-16 px-8 bg-[#000] text-white hover:text-[#000] rounded-lg hover:bg-transparent border border-[#000]"
        >
          Roadmap
        </a>
        <a
          href="#howitwork"
          data-aos="flip-up"
          className="w-fit md:py-6 py-3 md:px-16 px-8 bg-[#000] text-white hover:text-[#000] rounded-lg hover:bg-transparent border border-[#000]"
        >
          How it works
        </a>
        <a
          href="#bonus"
          data-aos="flip-up"
          className="w-fit md:py-6 py-3 md:px-16 px-8 bg-[#000] text-white hover:text-[#000] rounded-lg hover:bg-transparent border border-[#000]"
        >
          Bonus
        </a>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 lg:w-[50%] md:w-[70%] pt-20 w-[90%]">
        <div data-aos="fade-up" className="flex flex-col">
          <div className="bg-[#E3E3E3] py-4 font-bold text-black">
            {" "}
            Price (USD)
          </div>
          <div className="bg-[#EEEFEE] py-4 font-bold text-black">
            0.00000000
          </div>
        </div>
        <div data-aos="fade-up" className="flex flex-col">
          <div className="bg-[#E3E3E3] py-4 font-bold text-black"> % (24h)</div>
          <div className="bg-[#EEEFEE] py-4 font-bold text-black">▲ 0.00%</div>
        </div>
        <div data-aos="fade-up" className="flex flex-col">
          <div className="bg-[#E3E3E3] py-4 font-bold text-black">
            {" "}
            Market Cap
          </div>
          <div className="bg-[#EEEFEE] py-4 font-bold text-black">0.00</div>
        </div>
        <div data-aos="fade-up" className="flex flex-col">
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
        <div
          data-aos="fade-up"
          className="bg-[#000] text-white lg:w-[90%] w-full py-5 rounded-md text-3xl font-bold"
        >
          Presale
        </div>

        <div className="lg:w-[40%] md:w'[60%] w-[80%] pt-10 flex flex-col gap-5">
          <div data-aos="fade-up" className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Status</p>
            <p>Waiting</p>
          </div>
          <div data-aos="fade-up" className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Ticker</p>
            <p>$RUN</p>
          </div>
          <div data-aos="fade-up" className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Start</p>
            <p>25th March 2024 12pm utc</p>
          </div>
          <div data-aos="fade-up" className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">End *</p>
            <p>30th March 2024 5pm utc / when hard cap is reached</p>
          </div>
          <div data-aos="fade-up" className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Blockchain</p>
            <p>Solana</p>
          </div>
          <div data-aos="fade-up" className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Minimum Purchase</p>
            <p>0.5 sol</p>
          </div>
          <div data-aos="fade-up" className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Hard Cap</p>
            <p>300 sol</p>
          </div>
          <div data-aos="fade-up" className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Soft Cap</p>
            <p>100 sol</p>
          </div>
          <div data-aos="fade-up" className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Capped Supply</p>
            <p>1 billion</p>
          </div>
          <div data-aos="fade-up" className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Liquidity Pool</p>
            <p>8.69% of total supply </p>
          </div>
          <div data-aos="fade-up" className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Presale</p>
            <p>18.75% of total supply</p>
          </div>
          <div data-aos="fade-up" className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Marketing Bonus **</p>
            <p>18.75% of total supply</p>
          </div>
          <div data-aos="fade-up" className="flex justify-between items-center">
            <p className="tex-black font-bold text-xl">Development</p>
            <p>18.75% of total supply</p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col lg:w-[50%] md:w-[70%] w-full pt-20"
        >
          <div className="bg-[#E3E3E3] py-4 font-bold text-black">
            {" "}
            Send SOL to:
          </div>
          <div className="bg-[#EEEFEE] text-center md:text-[16px] text-[14px] py-4 font-bold text-black">
            F6dxMrLmP7FewQGmqeYuhsMTbfX6riWh4dwQDKb869md
          </div>
        </div>

        <div data-aos="fade-up" className="pt-20 lg:w-[50%] md:w-[70%] w-[90%]">
          <i className="text-lg lg:w-[50%] md:w-[70%] w-[90%]">
            Please note that all SOL sent before and after the scheduled launch
            date will be fully refunded upon the official launch of RUNE_SOl.
            Make sure to adhere to the start and end dates to avoid any
            inconvenience.
          </i>
        </div>
      </div>

      {/* ABOUT OMPONENTS */}

      <div
        id="about"
        className="flex flex-col w-full justify-center items-center pt-20"
      >
        <div
          data-aos="fade-up"
          className="bg-[#000] text-white lg:w-[90%] w-full py-5 rounded-md text-3xl font-bold"
        >
          About
        </div>

        <p
          data-aos="fade-up"
          className="text-lg pt-20 lg:w-[50%] md:w-[70%] w-[90%]"
        >
          Are you ready to buckle up for the ride of a lifetime with RUNE_SOl?
          You may have missed out on the hype with Dogwifhat, Nothingwifhat but
          guess what? RUNE_SOl is here, and it's your golden ticket to financial
          freedom. This is the next x1000+ gem!
        </p>

        <p
          data-aos="fade-up"
          className="text-lg pt-10 lg:w-[50%] md:w-[70%] w-[90%]"
        >
          Imagine cruising down the streets in your brand-new black Lamborghini,
          leaving behind the mundane 9-to-5 grind.
        </p>

        <p
          data-aos="fade-up"
          className="text-lg pt-10 lg:w-[50%] md:w-[70%] w-[90%]"
        >
          It's a chance to become part of something revolutionary. Share this
          opportunity with your friends, family, heck, even your neighbor's cat.
          Because when RUNE_SOl takes off, everyone's going to wish they were in
          on the action.
        </p>
      </div>

      {/* TEAM COMPONENTS */}
      <div
        id="team"
        className="flex flex-col w-full justify-center items-center pt-20"
      >
        <div
          data-aos="fade-up"
          className="bg-[#000] text-white lg:w-[90%] w-full py-5 rounded-md text-3xl font-bold"
        >
          Team
        </div>
        <div className="flex pt-20 flex-wrap lg:w-[60%] md:w-[70%] w-[90%] items-center justify-center gap-10">
          <div data-aos="fade-up" className="flex flex-col gap-2">
            <img src={img1} className="h-[200px] rounded-full" alt="" />
            <h2 className="text-2xl font-bold">King</h2>
            <p className="text-lg">Founder</p>
          </div>
          <div data-aos="fade-up" className="flex flex-col gap-2">
            <img src={img2} className="h-[200px] rounded-full" alt="" />
            <h2 className="text-2xl font-bold">lory</h2>
            <p className="text-lg">Co-Founder</p>
          </div>
          <div data-aos="fade-up" className="flex flex-col gap-2">
            <img src={img3} className="h-[200px] rounded-full" alt="" />
            <h2 className="text-2xl font-bold">Ivan</h2>
            <p className="text-lg">Block chain research lead</p>
          </div>
          <div data-aos="fade-up" className="flex flex-col gap-2">
            <img src={img4} className="h-[200px] rounded-full" alt="" />
            <h2 className="text-2xl font-bold">Paula</h2>
            <p className="text-lg">Risk manager</p>
          </div>
          <div data-aos="fade-up" className="flex flex-col gap-2">
            <img src={img5} className="h-[200px] rounded-full" alt="" />
            <h2 className="text-2xl font-bold">Lee Min</h2>
            <p className="text-lg">Community lead</p>
          </div>
          <div data-aos="fade-up" className="flex flex-col gap-2">
            <img src={img6} className="h-[200px] rounded-full" alt="" />
            <h2 className="text-2xl font-bold">David</h2>
            <p className="text-lg">Marketing lead</p>
          </div>
        </div>
      </div>

      {/* ROADMAP COMPONENTS */}

      <div
        id="roadmap"
        className="flex flex-col w-full justify-center items-center pt-20"
      >
        <div
          data-aos="fade-up"
          className="bg-[#000] text-white lg:w-[90%] w-full py-5 rounded-md text-3xl font-bold"
        >
          Roadmap
        </div>

        <div>
          <img src={roadmap} alt="" />
        </div>
      </div>

      {/* HOW IT WORKS COMPONENT */}
      <div
        id="howitwork"
        className="flex flex-col w-full justify-center items-center pt-20"
      >
        <div
          data-aos="fade-up"
          className="bg-[#000] text-white lg:w-[90%] w-full py-5 rounded-md text-3xl font-bold"
        >
          How it works
        </div>
        <div className="flex flex-col py-6">
          <h2 data-aos="fade-up" className="text-2xl font-bold">
            Download the Official Solana Wallet
          </h2>
          <a
            data-aos="fade-up"
            target="_blank"
            className="underline text-lg"
            href="https://solflare.com"
          >
            Solfare
          </a>
        </div>
        <div className="flex flex-col py-6">
          <h2 data-aos="fade-up" className="text-2xl font-bold">
            Create Your Solana Address
          </h2>
          <p data-aos="fade-up" className="text-lg">
            Set up your unique Solana address with Solflare to start
            transacting.
          </p>
        </div>
        <div className="flex flex-col py-6">
          <h2 data-aos="fade-up" className="text-2xl font-bold">
            Add SOL to Your Address
          </h2>
          <p data-aos="fade-up" className="text-lg">
            Fund your Solana address with SOL tokens to participate in
            transactions.
          </p>
        </div>
        <div className="flex flex-col py-6">
          <h2 data-aos="fade-up" className="text-2xl font-bold">
            Participate in the Presale
          </h2>
          <p data-aos="fade-up" className="text-lg">
            Send SOL from your Solflare wallet to the{" "}
            <a href="#presale" className="underline">
              presale address provided above
            </a>{" "}
            to join the event.
          </p>
        </div>
        <div className="flex flex-col py-6">
          <h2 data-aos="fade-up" className="text-2xl font-bold">
            That's It!
          </h2>
          <p data-aos="fade-up" className="text-lg">
            At the end of the presale, you will receive your SOL bonuses and
            RUNE_SOl tokens directly in your Solflare wallet.
          </p>
        </div>

        <div>
          <h2 data-aos="fade-up" className="text-red-600 font-bold">
            {" "}
            Security Warning
          </h2>
          <p data-aos="fade-up" className="text-red-500">
            Never share your private key with anyone. Your private key is your
            access to your funds and should be kept secure at all times.
          </p>
        </div>
      </div>

      {/* MARKET BONUS */}
      <div
        id="bonus"
        className="flex flex-col w-full justify-center items-center pt-20"
      >
        <div
          data-aos="fade-up"
          className="bg-[#000] text-white lg:w-[90%] w-full py-5 rounded-md text-3xl font-bold"
        >
          Market Bonus
        </div>
        <div className="flex flex-col lg:w-[50%] md:w-[70%] w-[90%] justify-center items-center">
          <p data-aos="fade-up" className="text-lg pt-10">
            We have allocated 9.5% of the project's funds to the Marketing
            Bonus. We will be giving back a certain number of SOL to those who
            participate.
          </p>
          <p data-aos="fade-up" className="text-lg pt-10">
            We will make an official Twitter (X) post when the presale starts.
            Those who like, share, comment, nor display proof of their
            participation in the comments through a photo will receive SOL as a
            bonus.
          </p>

          <div className="pt-10 flex flex-col items-end gap-4 text-lg">
            <p data-aos="fade-up">
              Like = <strong>0.2 SOL</strong>
            </p>
            <p data-aos="fade-up">
              Retweet = <strong>0.2 SOL</strong>
            </p>
            <p data-aos="fade-up">
              Comment = <strong>0.2 SOL</strong>
            </p>
            <p data-aos="fade-up">
              Transfert Proof = <strong>0.4 SOL</strong>
            </p>
          </div>

          <div className="flex flex-col pt-10">
            <p data-aos="fade-up" className="text-lg">
              You could receive a total of 1 SOL completely free to your
              address.
            </p>
            <p data-aos="fade-up">
              Don't forget to share your SOL address in your Twitter (X)
              comment.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-[#E3E3E3] mt-20 w-full flex flex-col justify-center items-center py-10">
        <div className="flex items-center gap-4 text-2xl">
          <a
            target="_blank"
            href="https://x.com/solrune20?t=6r2Du7QLvczHhNkfdlIWGQ&s=09"
          >
            <TbBrandX />
          </a>
          <a target="_blank" href="https://t.me/+Ze3BsfbeM8M4YmM0">
            <TbBrandTelegram />
          </a>
        </div>
        <a href="mailto:info@rune_sol.com" className="pt-4">
          info@rune_sol.com
        </a>
        <div className="pt-4">
          Copyright © runes_sol.com, RUNES_SOL. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
