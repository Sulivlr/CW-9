import {useNavigate} from 'react-router-dom';

const Categories = () => {

  const navigate = useNavigate();
  const formClick = () => {
    navigate('/form');
  } ;

  return (
    <div>
      <div className="d-flex mt-3 justify-content-between">
      <h2>Categories</h2>
        <button onClick={formClick} className="btn btn-success">Add</button>
      </div>
      <div className="card-body ">
        <div className="card d-flex flex-row justify-content-between align-items-center p-4 mt-4">
          <span>05.01.2023 15:00</span>
          <span>Salary</span>
          <strong>+700 KGS</strong>
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Categories;