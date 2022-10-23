import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
//app function
function App() {
  const [page, setPage] = useState("List");
  const [myData, setMyData] = useState([])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm myData={myData} setMyData={setMyData} /> : <QuestionList myData={myData} setMyData={setMyData} />}
    </main>
  );
}

export default App;