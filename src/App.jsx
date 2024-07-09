import "./App.css";
import { assets } from "./assets/assets.js";

function App() {
  return (
    <>
      <div className="header">
        <img src={assets.headpic} alt="header-img" />
        <div className="header-disc">
          <h2>Simple Omelette Reciepe</h2>
          <p>
            An enjoy and quick dish, perfect for any meal.This classic omelette
            combines beaten eggs cooked too perfections
          </p>
        </div>
        <div className="discription">
          <ul className="time-list">
            <h3>Preparation Time </h3>
            <li>
              <span>Total:</span> Approximitely 10min
            </li>
            <li>
              <span>preparation:</span> 5 minutes
            </li>
            <li>
              <span>cooking:</span> 5 minutes
            </li>
          </ul>
        </div>
        <div className="ingredients">
          <h3>ingredients</h3>
          <ul className="ingredients-list">
            <li>2-3larhe eggs</li>
            <li>salt,to faste</li>
            <li>1tablespoon of butter or oli </li>
            <li>optional flilings: cheese,, diced vegetables,herbs </li>
          </ul>
          <hr></hr>
        </div>
        <div className="instruction">
          <h3>Instructions</h3>
          <ol>
            <li>
              <span>Beat the eggs:</span>A well-written resume job description
              can offer hiring managers important indications regarding the type
              of employee you are and the potential value you can bring to an
              organization. Regardless of your qualifications
            </li>
            <li>
              <span>Heat the pan:</span>A well-written resume job description
              can offer hiring managers important indications regarding the type
              of employee you are and the potential value you can bring to an
              organization. Regardless of your qualifications
            </li>
            <li>
              <span>cook the omlette:</span>A well-written resume job
              description can offer hiring managers important indications
              regarding the type of employee you are and the potential value you
              can bring to an organization. Regardless of your qualifications
            </li>
            <li>
              <span>Add flilingd (optional):</span>A well-written resume job
              description can offer hiring managers important indications
              regarding the type of employee you are and the potential value you
              can bring to an organization. Regardless of your qualifications
            </li>
            <li>
              <span>Fold and serve:</span>A well-written resume job description
              can offer hiring managers important indications regarding the type
              of employee you are and the potential value you can bring to an
              organization. Regardless of your qualifications
            </li>
            <li>
              <span>Enjoy:</span>A well-written resume job description can offer
              hiring managers important indications regarding the type of
              employee you are and the potential value you can bring to an
              organization. Regardless of your qualifications
            </li>
          </ol>
          <hr></hr>
        </div>
        <h3>Nutrition</h3>
        <p>
          A well-written resume job description can offer hiring managers
          important indications regarding the type of employee you are{" "}
        </p>

        <table className="custom-table">
          {/* <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead> */}
          <tbody>
            <tr>
              <td>Calories</td>
              <td className="colm2">277kcal</td>
            </tr>
            <tr>
              <td>Ca rbs</td>
              <td className="colm2">0g</td>
            </tr>
            <tr>
              <td>Protien</td>
              <td className="colm2">20g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>22g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
