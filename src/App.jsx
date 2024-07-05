import { useState } from "react";
import "./App.css";
import { assets } from "./assets/assets.js";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <img src={assets.headpic} alt="header-img" className="header-pic" />
        <div className="header-disc">
          <h2>Simple Omelette Reciepe</h2>
          <p>
            An enjoy and quick dish, perfect for any meal.This classic omelette
            combines beaten eggs cooked too perfection , optionally filled with
            your choice of cheese ,vegetables ,or meats
          </p>
        </div>
        <div className="discription">
          <ul className="time-liste">
            <il>
              <span>Total:</span> Approximitely 10min
            </il>
            <il>
              <span>preparation:</span> 5 minutes
            </il>
            <il>
              <span>cooking:</span> 5 minutes
            </il>
          </ul>
        </div>
        <div className="ingredients">
          <h3>ingredients</h3>
          <ul className="time-liste">
            <il>2-3larhe eggs</il>
            <il>salt,to faste</il>
            <il>1tablespoon of butter or oil </il>
            <il>optional fillings: cheese,, diced vegetables,herbs </il>
          </ul>
          <hr></hr>
        </div>
        <div className="instruction">
          <h3>Instructions</h3>
          <ul>
            <il>
              <span>Beat the eggs:</span>A well-written resume job description
              can offer hiring managers important indications regarding the type
              of employee you are and the potential value you can bring to an
              organization. Regardless of your qualifications, showing that you
              have a history of using your knowledge and skills for other
              companies should increase your odds of being considered for the
              position
            </il>
            <il>
              <span>Heat the pan:</span>A well-written resume job description
              can offer hiring managers important indications regarding the type
              of employee you are and the potential value you can bring to an
              organization. Regardless of your qualifications, showing that you
              have a history of using your knowledge and skills for other
              companies should increase your odds of being considered for the
              position
            </il>
            <il>
              <span>cook the omlette:</span>A well-written resume job
              description can offer hiring managers important indications
              regarding the type of employee you are and the potential value you
              can bring to an organization. Regardless of your qualifications,
              showing that you have a history of using your knowledge and skills
              for other companies should increase your odds of being considered
              for the position
            </il>
            <il>
              <span>Add fillingd (optional):</span>A well-written resume job
              description can offer hiring managers important indications
              regarding the type of employee you are and the potential value you
              can bring to an organization. Regardless of your qualifications,
              showing that you have a history of using your knowledge and skills
              for other companies should increase your odds of being considered
              for the position
            </il>
            <il>
              <span>Fold and serve:</span>A well-written resume job description
              can offer hiring managers important indications regarding the type
              of employee you are and the potential value you can bring to an
              organization. Regardless of your qualifications, showing that you
              have a history of using your knowledge and skills for other
              companies should increase your odds of being considered for the
              position
            </il>
            <il>
              <span>Enjoy:</span>A well-written resume job description can offer
              hiring managers important indications regarding the type of
              employee you are and the potential value you can bring to an
              organization. Regardless of your qualifications, showing that you
              have a history of using your knowledge and skills for other
              companies should increase your odds of being considered for the
              position
            </il>
          </ul>
          <hr></hr>
        </div>
        <h3>Nutrition</h3>
        <p>
          A well-written resume job description can offer hiring managers
          important indications regarding the type of employee you are{" "}
        </p>
      </div>
    </>
  );
}

export default App;
