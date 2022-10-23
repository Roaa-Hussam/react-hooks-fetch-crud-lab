import { logDOM } from "@testing-library/react";
import React from "react";

function QuestionItem({ question, myData, setMyData }) {
  const { id, prompt, answers, correctIndex } = question;

  async function deleteItem(itemID) {
    await fetch(`http://localhost:4000/questions/${itemID}`, {
      method: 'DELETE'
    })
    await setMyData(myData.filter((quez) => quez.id !== itemID))
  }

  function changeCorrectAnswer(event) {
    let newCurrect = parseInt(event.target.value)

    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify({ "correctIndex": newCurrect })
    })

    setMyData([...myData.map(e => {
      if (e.id === id) {
        e.correctIndex = newCurrect
      }
      return e
    })])

  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={changeCorrectAnswer} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => deleteItem(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;