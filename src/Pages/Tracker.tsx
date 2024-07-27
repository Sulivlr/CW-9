
const Tracker = () => {
  return (
    <div className="mt-3">
      <div className="card-body col-3">
        <div className="card p-4">
          Total: 700 KGS
        </div>
      </div>
        <div className="card-body">
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

export default Tracker;