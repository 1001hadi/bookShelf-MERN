import { useState } from "react";
import BackBtn from "../components/BackBtn";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function DeleteBook() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBookRemove = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:8888/books/${id}`)
      .then(() => {
        setLoading(false);
        // enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error happened. Please Chack console");
        // enqueueSnackbar('Error', { variant: 'error' });
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <BackBtn />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <LoadingSpinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Do You want to remove this book?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleBookRemove}
        >
          Sure, remove it
        </button>
      </div>
    </div>
  );
}

export default DeleteBook;
