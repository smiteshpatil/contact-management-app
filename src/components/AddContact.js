import { React,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Mobile, setMobile] = useState("");

  const contacts = useSelector((state) => state);

  //save the data
  const dispatch = useDispatch();

  //push user back again
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !Mobile) {
      return toast.warning("Please fill in all the fields !");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      firstName,
      lastName,
      Mobile,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact added successfully !");
    navigate("/"); // on adding contact navigate back to homepage
  };

  return (
    <div className="lg:text-center sm:text-left text-2xl lg:m-5">
      <p className="text-center m-6">Create New Contact</p>

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
          placeholder=" +91 86727129"
          type="number"
          value={parseInt(Mobile)}
          onChange={(e) => setMobile(e.target.value)}
        />
        <div className="text-xl text-center mt-6">
          <input
            className="rounded p-2 m-5 text-white bg-sky-700 cursor-pointer"
            type="submit"
            value="Add To Contact"
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

export default AddContact;
