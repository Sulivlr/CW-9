import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {useEffect} from 'react';
import {fetchCategory, removeCategory} from '../store/categoryThunk';
import {selectCategory, selectCategoryIsFetching, selectDeleteCategory} from '../store/categorySlice';
import Spinner from '../components/Spinner/Spinner';

const Category = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategory);
  const isFetching = useAppSelector(selectCategoryIsFetching);
  const isDeleting = useAppSelector(selectDeleteCategory);
  const navigate = useNavigate();
  const formClick = () => {
    navigate('/form');
  };

  const onRemove = async (categoryId: string) => {
    if (window.confirm('Are you sure about deleting?')) {
      await dispatch(removeCategory(categoryId));
      await dispatch(fetchCategory());
    }
  };

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return isFetching ? (
    <Spinner/>) : (
    <div>
      <div className="d-flex mt-3 justify-content-between">
        <h2>Categories</h2>
        <button onClick={formClick} className="btn btn-success">Add</button>
      </div>
      <div className="card-body">
        {categories.map(category => (
          <div key={category.id} className="card d-flex flex-row justify-content-between align-items-center p-4 mt-4">
            <span>{category.name}</span>
            <strong>{category.type}</strong>
            <button className="btn btn-primary">Edit</button>
            <button onClick={() => onRemove(category.id)} disabled={isDeleting === category.id} className="btn btn-danger">
              {isDeleting === category.id ? <Spinner/> : null}
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
