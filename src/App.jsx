import { useState, useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import animationData from "./lotties/animated-J.json";
import { Progress } from "antd";

function App() {
  const [loading, setLoading] = useState(true);
  const [millisecond, setMillisecond] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    const intervalId = setInterval(() => {
      setMillisecond((prevMillisecond) => prevMillisecond + 100);
    }, 100);
    setTimeout(() => {
      clearInterval(intervalId);
    }, 2000);
    return (
      <div className="min-h-screen w-full h-full flex justify-center items-center flex-col bg-[#1F2D37]">
        <div className="w-full lg:mb-28">
          <div>
            <Player
              autoplay
              loop
              src={animationData}
              style={{ height: "300px", width: "300px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
          <div className="w-full flex justify-center items-center">
            <Progress
              className="w-6/12"
              percent={Math.floor(millisecond/2000)}
              showInfo={false}
              strokeColor={"#FFA940"}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <>Loaded</>;
  }
}

export default App;
