import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ListOfCourcesFC } from './components/listofcourses.functional';
import { NewCourse } from './components/newCourse.reactHooksForm';
import { TrainerDetails } from './components/trainer.details';
import { Trainers } from './components/trainers';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Pubdemy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Courses
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/newcourse">
                  New Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trainers">
                  Meet our trainers
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<ListOfCourcesFC />} />
          <Route
            path="/newcourse"
            element={<NewCourse addNewCourse={() => {}} />}
          />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/trainers/:id" element={<TrainerDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
