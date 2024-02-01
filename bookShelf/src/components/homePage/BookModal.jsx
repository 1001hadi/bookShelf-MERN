import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

function BookModal({ book, onClose }) {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-[#219ebc] rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-[#219ebc] text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-[#219ebc] text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">The magic of good reading</p>
        <p className="my-2">
          As we continue to read more books it is like we continue to experience
          and do things that are new to us. We learn through experience,
          experience that we get through reading. In Anne E. Cunningham and
          Keith E. Stanovich’s “What Reading Does for the Mind”, it was stated
          there that heavy readers tend to display greater knowledge of how
          things work and who or what people were. In line with this, our
          conversation skills are improved as well because by knowing a lot of
          new information, we are able to engage in an academic or scholarly
          conversation wherein we share to other people what we know
        </p>
      </div>
    </div>
  );
}

export default BookModal;
