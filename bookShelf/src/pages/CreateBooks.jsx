import { useState } from "react";
import BackBtn from "../components/BackBtn";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBookCreate = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:8888/books", data)
      .then(() => {
        setLoading(false);
        // enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error happened. Please Chack the console");
        // enqueueSnackbar('Error', { variant: 'error' });
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackBtn />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <LoadingSpinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleBookCreate}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBooks;
