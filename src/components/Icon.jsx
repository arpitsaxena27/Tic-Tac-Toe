import { FaRegCircle, FaTimes } from "react-icons/fa";
function Icon({ name }) {
      if (name == "O") return <FaRegCircle></FaRegCircle>;
      else if (name == "X") return <FaTimes></FaTimes>;
      else return ;
}
export default Icon;
