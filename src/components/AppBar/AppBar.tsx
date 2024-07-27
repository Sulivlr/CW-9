import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useAppDispatch} from '../../app/hooks';
import {openModal} from '../../store/transactionSlice';

const Appbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const open = () => {
    dispatch(openModal());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-bg-success">
      <div className="container-fluid">
        <span className="navbar-brand">
          <Link to="/" className="nav-link">Finance Tracker</Link>
        </span>
        <ul className="navbar-nav mr-auto flex-row flex-nowrap gap-2">
          <li className="nav-item">
            <NavLink to="/category" className="nav-link">Categories</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/modal" className="nav-link" onClick={open}>Add</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Appbar;