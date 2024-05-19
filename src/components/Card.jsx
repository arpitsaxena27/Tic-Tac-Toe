import Icon from "./Icon.jsx";
function Card({ player, onPlay, index ,isWinner}) {
      return (
            <div
                  onClick={() => onPlay(index)}
                  className={`card ${isWinner ? ' transition-colors duration-1000 bg-cyan-400 lg:w-36 lg:h-36 md:w-36 md:h-36 w-28 h-28 rounded-3xl border-4 border-white flex justify-center items-center text-7xl m-1' : 'bg-yellow-400 lg:w-36 lg:h-36 md:w-36 md:h-36 w-28 h-28 rounded-3xl border-4 border-white flex justify-center items-center text-7xl m-1'}`}
            >
                  <Icon name={player}></Icon>
            </div>
      );
}

export default Card;
