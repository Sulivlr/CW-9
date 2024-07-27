

const CategoriesForm = () => {


  return (
    <form className="container mb-4 mt-3">
      <h4>Add Category</h4>
      <div className="form-group">
        <label htmlFor="name">Food</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="CategoryType">Type</label>
        <input
          required
          type="text"
          name="CategoryType"
          id="CategoryType"
          className="form-control"
        />
      </div>
      <div className="mt-3">
      <button className="btn btn-danger">Edit</button>
      <button type="submit" className="btn btn-primary ms-3">Create</button>
      </div>
    </form>
  );
};

export default CategoriesForm;