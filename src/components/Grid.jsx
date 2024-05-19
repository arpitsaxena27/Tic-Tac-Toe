import { useState } from "react";
import Card from "./Card";
import isWinner from "./checkWinner";
function Grid({ num }) {
      let [GameBoard, setGameBoard] = useState(Array(num).fill(""));
      let [Turn, setTurn] = useState(true);
      let [Turnstr, setTurnstr] = useState("TURN OF -> X");
      let [Winner, setWinner] = useState("");
      // eslint-disable-next-line no-unused-vars
      let [count, setCount] = useState(num);
      let reset = document.getElementById("reset");
      let turn = document.getElementById("turn");
      function reseter() {
            setGameBoard(Array(num).fill(""));
            setTurn(true);
            setWinner("");
            setTurnstr("TURN OF -> X");
            reset.classList.add("hidden");
            reset.classList.remove("flex");
            turn.classList.remove("hidden");
      }
      function play(index) {
            if (GameBoard[index] == "") {
                  if (Turn == true) {
                        setTurnstr("TURN OF -> O");
                        GameBoard[index] = "X";
                  } else {
                        setTurnstr("TURN OF -> X");
                        GameBoard[index] = "O";
                  }
                  setGameBoard([...GameBoard]);
                  if (isWinner(GameBoard)) {
                        setWinner(`${GameBoard[index]}`);
                        reset.classList.remove("hidden");
                        reset.classList.add("flex");
                        turn.classList.add("hidden");
                  }
                  setTurn(!Turn);
                  setCount(num--);
                  if (num == 0) reseter;
            }
      }
      function playstop() {
            //function to stop response from user
      }
      return (
            <div className="gridwrap flex justify-center gap-56 items-center flex-wrap">
                  <div className="flex flex-col justify-center items-center gap-10">
                        <div id="reset" className="gap-9 hidden flex-wrap justify-center">
                              <h1 className="flex items-center text-yellow-400 text-5xl border-2 border-white p-3 rounded-md">
                                    Winner&nbsp;-&nbsp;&nbsp;{" "}
                                    <span className=" text-white text-6xl">
                                          {Winner}
                                    </span>
                              </h1>
                              <button
                                    className=" text-black bg-sky-400 text-4xl px-6 py-2 pb-4 rounded-md border-4 border-white"
                                    onClick={reseter}
                              >
                                    Reset
                              </button>
                        </div>
                        <h1
                              id="turn"
                              className=" text-yellow-400 text-5xl border-2 border-white p-3 rounded-md"
                        >
                              {Turnstr}
                        </h1>
                  </div>
                  <div className="grid grid-cols-3 gap-0 w-fit">
                        {GameBoard.map((el, idx) => (
                              <Card
                                    onPlay={
                                          isWinner(GameBoard) ? playstop : play
                                    }
                                    player={el}
                                    key={idx}
                                    index={idx}
                              ></Card>
                        ))}
                  </div>
            </div>
      );
}

export default Grid;
