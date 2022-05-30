import React, { useEffect, useState } from "react";
import CustomButton from "../../components/customButton/customButton.component";
import useQuery from "../../hooks/useQuery";
import QueryModal from "./queryModal";
import useAuth from "../../hooks/useAuth";

const AllQueries = () => {
  const [queruyModalState, setQueryModalState] = useState({
    open: false,
    query: null,
  });
  const { queries, getAllQueries } = useQuery();

  useEffect(() => {
    if (queries.length === 0) {
      getAllQueries();
    }
  }, []);
  const { user } = useAuth();

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
    <div className="pt-3">
      {user.isAdmin ? (
        <div>
          {" "}
          <h1 className="text-4xl font-bold">All recent queries</h1>
          <div>
            {queries.map((q) => (
              <div
                className="w-3/5 shadow-lg min-h-32 h-fit px-3 py-2 my-3 cursor-pointer hover:shadow-xl hover:translate-x-2 transition-all ease-in-out"
                key={q}
                onClick={() => {
                  toggleQueryModal(q);
                }}
              >
                <h1 className="text-3xl my-2">{q?.title}</h1>
                <p className="text-lg text-gray-500 mb-3">{q?.description}</p>
                <div>{q?.response.length} messages</div>
              </div>
            ))}
          </div>
          <QueryModal
            state={queruyModalState.open}
            toggleModal={toggleQueryModal}
            query={queruyModalState.query}
          />
        </div>
      ) : (
        <div>
          <h1>You are not athorized to visit this page</h1>
        </div>
      )}
    </div>
  );
};

export default AllQueries;
