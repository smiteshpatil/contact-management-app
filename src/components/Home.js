import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully");
  };

  return (
    <div className="text-center pt-10 lg:text-2xl md:text-xl sm:text-xl">
      <h1 className="lg:text-3xl md:text-xl sm:text-xl font-medium">
        Welcome To Contact Book
      </h1>
      <div className="rounded p-2 m-5 lg:text-xl md:text-xl sm:text-lg text-white bg-sky-700">
        <button>
          <Link to="/add">Create New Contact</Link>
        </button>
      </div>
      <div className="text-left p-2 m-5 font-medium">My Contacts:</div>
      <div className="flex flex-col p-2 m-5">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left bg-slate-300">
                <thead className="font-medium dark:border-neutral-500 bg-slate-400">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      id
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Mobile
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Edit/Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, id) => (
                    <tr className="border-b dark:border-neutral-500" key={id}>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {id + 1}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {contact.firstName + " " + contact.lastName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {contact.Mobile}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Link
                          className="rounded mx-1 px-2 text-white bg-sky-700"
                          to={`/edit/${contact.id}`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteContact(contact.id)}
                          className="rounded mx-1 px-2 text-white bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
