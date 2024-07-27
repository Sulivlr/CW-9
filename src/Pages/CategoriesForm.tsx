import React, {useState} from 'react';


const CategoriesForm = () => {

  const [category, setCategory] = useState({
    name: '',
    CategoryType: '',
  });

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategory((prevState) => ({ ...prevState, [name]: value }));
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  console.log(category)


  return (
    <form className="container mb-4 mt-3" onSubmit={onSubmit}>
      <h4>Add Category</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          value={category.name}
          onChange={onFieldChange}
          className="form-control"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="CategoryType">Type</label>
        <input
          required
          type="text"
          name="CategoryType"
          value={category.CategoryType}
          onChange={onFieldChange}
          id="CategoryType"
          className="form-control"
        />
      </div>
      <div className="mt-3">
      <button className="btn btn-primary">Edit</button>
      <button type="submit" className="btn btn-success ms-3">Create</button>
      </div>
    </form>
  );
};

export default CategoriesForm;