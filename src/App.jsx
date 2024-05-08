import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilState } from "recoil";;
import NotifBar from "./components/NotifBar";

function App() {
  return (
    <>
      <RecoilRoot>
        <NotifBar />
      </RecoilRoot>
    </>
  );
}

export default App;
