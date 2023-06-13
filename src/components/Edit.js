import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Edit = () => {
  const { id } = useParams();

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Mobile, setMobile] = useState();

  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    setfirstName(currentContact.firstName);
    setlastName(currentContact.lastName);
    setMobile(currentContact.Mobile);
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: currentContact.id,
      firstName,
      lastName,
      Mobile,
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contact updated successfully !");
    navigate("/"); //push user to home
  };

  return (
    <div className="lg:text-center sm:text-left text-2xl lg:m-5 ">
      <p className="text-center m-6">Edit Contact {id} </p>

      <form className="m-6" onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input
          className=" rounded-lg border border-gray-300 lg:m-4 p-1"
          type="text"
          placeholder="John"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <br />
        <label>Last Name: </label>
        <input
          className=" rounded-lg border border-gray-300 lg:m-4 p-1"
          type="text"
          placeholder="Doe"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
        <br />
        <label>Mobile: </label>
        <input
          className=" rounded-lg border border-gray-300 lg:m-4 p-1"
          type="number"
          value={parseInt(Mobile)}
          onChange={(e) => setMobile(e.target.value)}
        />

        <div className="text-xl text-center mt-6">
          <input
            type="submit"
            value="Save Changes"
            className="rounded p-2 m-5 text-white bg-sky-700 cursor-pointer"
          />

          <Link
            className="rounded p-2 m-5 bg-slate-300 hover:bg-slate-500 hover:text-white "
            to="/"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Edit;
