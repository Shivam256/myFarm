import React, { useEffect, useState } from "react";
import useQuery from "../../hooks/useQuery";
import UserQueryModal from "./userQueryModal";


const MyQueries = () => {
  const { getUserQueries, userQueries } = useQuery();
  const [queruyModalState, setQueryModalState] = useState({
    open: false,
    query: null,
  });

  useEffect(() => {
    getUserQueries();
  }, []);

  const toggleQueryModal = (query) => {
    if (query) {
      setQueryModalState({
        open: !queruyModalState.open,
        query: query,
      });
    } else {
      setQueryModalState({ ...queruyModalState, open: false });
    }
  };

  return (
    <div className="pt-5">
      <h1 className="text-3xl font-bold">My Queries</h1>
      <div>
        {userQueries.map((q) => (
          <div
            className="w-3/5 shadow-lg min-h-32 h-fit px-3 py-2 my-3 cursor-pointer hover:shadow-xl hover:translate-x-2 transition-all ease-in-out"
            key={q}
            onClick={()=>{
                toggleQueryModal(q)
            }}
          >
            <h1 className="text-3xl my-2">{q?.title}</h1>
            <p className="text-lg text-gray-500 mb-3">{q?.description}</p>
            <div>{q?.response.length} messages</div>
          </div>
        ))}
      </div>
      <UserQueryModal
        state={queruyModalState.open}
        toggleModal={toggleQueryModal}
        query={queruyModalState.query}
      />
    </div>
  );
};

export default MyQueries;
