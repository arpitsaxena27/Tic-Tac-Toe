import Icon from "./Icon.jsx";
function Card({ player, onPlay, index ,isWinner}) {
      return (
            <div
                  onClick={() => onPlay(index)}
                  className={`card ${isWinner ? ' transition-colors duration-1000 bg-cyan-400 lg:w-40 lg:h-40 md:w-40 md:h-40 w-32 h-32 rounded-3xl border-4 border-white flex justify-center items-center text-7xl m-1' : 'bg-yellow-400 lg:w-40 lg:h-40 md:w-40 md:h-40 w-32 h-32 rounded-3xl border-4 border-white flex justify-center items-center text-7xl m-1'}`}
            >
                  <Icon name={player}></Icon>
            </div>
      );
}

export default Card;
