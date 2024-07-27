import React, {useState} from 'react';
import {ApiCategory} from '../types';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectCategoryIsCreating} from '../store/categorySlice';
import {createCategory} from '../store/categoryThunk';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';


const CategoryForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectCategoryIsCreating);
  const [category, setCategory] = useState<ApiCategory>({
    name: '',
    type: 'expense' || 'income',
  });

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategory((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(createCategory({...category})).unwrap();
      navigate('/category');
      toast.success('Category created');
    } catch (e) {
      toast.error('Coudnt create a category');
    }
  };


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
          value={category.type}
          onChange={onFieldChange}
          id="CategoryType"
          className="form-control"
        />
      </div>
      <div className="mt-3">
      <button className="btn btn-primary">Edit</button>
      <button type="submit" disabled={isCreating} className="btn btn-success ms-3">
        {isCreating && (<Spinner/>)} Create
      </button>
      </div>
    </form>
  );
};

export default CategoryForm;