// Ray helped with this lab assignment

import { useState } from 'react'
import { learnerArr } from "./learnerData/LearnersArr";

import './App.css'

function App() {
    const [learners, setLearners ] = useState(learnerArr);
      return(
        <>

        <h1> Learners: </h1>
        {learners.map((learner) => {
          return <Learner key={learner.name} learner={learner} />;
        })}

        </>
      );
}

function Learner({ learner }) {
    return (
      <>
      <h3> { learner.name } </h3>
      <h4> Bio: { learner.bio }</h4>
      <Score scores = { learner.scores } />
      </>
    );
}

function Score({ scores }) {
  return (
    <>
    <ul>
      {scores.map((score) => (
        <li>
          Date: {score.date} <br />
          Score: {score.score}
        </li>
      ))}
    </ul>
    </>
  );
}
export default App;
