import "./styles.css";
import { useState } from "react";
import useQuestion from "./data";
import Question from "./components/Question";
export default function App() {
  const { React, JavaScript, NodeJs, MongoDB, MERN, HR } = useQuestion();
  const [route, setRoute] = useState([
    { name: "React.Js", hide: false },
    { name: "JavaScript", hide: false },
    { name: "Node.Js", hide: false },
    { name: "MongoDB", hide: false },
    { name: "MERN", hide: false },
    { name: "HR Round", hide: false }
  ]);
  const handleTextech = (index) => {
    const newRoute = route.map((ele, i) =>
      index === i ? { ...ele, hide: true } : { ...ele, hide: false }
    );
    // console.log(newRoute)
    setRoute(newRoute);
  };

  return (
    <div className="App">
      <h1 style={{ fontFamily: "cursive", color: "blueviolet" }}>
        Ranmod Interview Questions
      </h1>
      <h3>Select Textech</h3>
      <div>
        {route.map((ele, i) => {
          return (
            <button
              style={{
                padding: "0.7rem",
                borderRadius: "15px",
                border: "1px solid greenYellow",
                cursor: "pointer",
                fontSize: "15px",
                fontFamily: "cursive",
                color: "blue"
              }}
              key={i}
              onClick={() => handleTextech(i)}
            >
              {ele.name}
            </button>
          );
        })}
      </div>
      <div>
        {route[0].hide ? (
          <Question data={React} text={"React.Js Questions"} />
        ) : (
          ""
        )}
        {route[1].hide ? (
          <Question data={JavaScript} text={"JavaScript Questions"} />
        ) : (
          ""
        )}
        {route[2].hide ? (
          <Question data={NodeJs} text={"Node.Js Questions"} />
        ) : (
          ""
        )}
        {route[3].hide ? (
          <Question data={MongoDB} text={"MongoDB Questions"} />
        ) : (
          ""
        )}
        {route[4].hide ? <Question data={MERN} text={"MERN Questions"} /> : ""}
        {route[5].hide ? <Question data={HR} text={"HR Round"} /> : ""}
      </div>
    </div>
  );
}
