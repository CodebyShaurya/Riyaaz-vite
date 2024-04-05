import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import handOnGuitar from "../assets/HandOnGuitar.png";
import audioSymbol from "../assets/AudioSymbol.png";
import audioControls from "../assets/AudioControls.png";

function Learn() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-[75vw]">
          <div className="h-[70vh] relative border-2 border-black flex items-center justify-center gap-20 p-4">
            <div className="absolute bottom-0 left-2 font-bold text-xl">
              Recommended Videos
            </div>
            <div className="flex flex-col gap-14 absolute left-[10%]">
              <div className="text-7xl font-bold text-[#FC0353]">D</div>
              <div className="text-7xl font-bold">E</div>
              <div className="text-7xl font-bold">F</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 pl-24">
              <div>
                <img
                  src={handOnGuitar}
                  alt="Hand on Guitar"
                  className="h-[300px] w-[500px]"
                />
              </div>
              <div>
                <img
                  src={audioSymbol}
                  alt="Symbol of Audio"
                  className="h-[50px] w-[400px]"
                />
              </div>
              <div>
                <img
                  src={audioControls}
                  alt="Audio Controls"
                  className="h-[40px] w-[200px]"
                />
              </div>
            </div>
          </div>
          <div className="h-[25vh] flex border-black p-2 pr-0 overflow-x-scroll gap-2">
            <div className="h-[100%] min-w-[400px] border-2 border-black rounded-sm"></div>
            <div className="h-[100%] min-w-[400px] border-2 border-black rounded-sm"></div>
            <div className="h-[100%] min-w-[400px] border-2 border-black rounded-sm"></div>
            <div className="h-[100%] min-w-[400px] border-2 border-black rounded-sm"></div>
          </div>
        </div>
        <div className="w-[25vw] h-[95vh] bg-[#D5D5D5] overflow-y-scroll p-4 flex flex-col gap-2">
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox" />
              <label for="myCheckbox" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox0" />
              <label for="myCheckbox0" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox1" />
              <label for="myCheckbox1" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox2" />
              <label for="myCheckbox2" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox3" />
              <label for="myCheckbox3" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox4" />
              <label for="myCheckbox4" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox5" />
              <label for="myCheckbox5" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox6" />
              <label for="myCheckbox6" className="w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="bg-[#09183D] p-4 rounded-md flex justify-between">
            <div className="flex gap-4">
              <div className="text-white">1.</div>
              <div className="text-white">
                <div>Cords D, E and F</div>
                <div>
                  <div className="text-white">5 min</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="myCheckbox7" />
              <label for="myCheckbox7" className="w-[30px] h-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
