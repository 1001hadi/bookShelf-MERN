import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function BackBtn({ destination = "/" }) {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-[#219ebc] text-white px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
}

export default BackBtn;
