import React, { useEffect } from "react";
import useContact from "../../hooks/useContact";

const AllContacts = () => {
  const { contacts, getAllContacts } = useContact();

  useEffect(() => {
    getAllContacts();
  }, []);
  return (
    <div className="pt-3">
      <h1 className="text-4xl font-bold">All recent contacts</h1>
      <div>
        {contacts.map((contact) => (
          <div className="w-2/5 shadow-lg min-h-32 h-fit px-3 py-2 my-3 cursor-pointer hover:shadow-xl hover:translate-x-2 transition-all ease-in-out flex flex-col gap-1">
            <h1 className="text-3xl mt-3">{contact?.phone}</h1>
            <h1 className="text-xl text-gray-700">{contact?.email}</h1>
            <h1 className="text-md text-gray-500 mb-3">{contact?.reason}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllContacts;
