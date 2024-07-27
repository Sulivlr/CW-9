import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectCategory} from '../store/categorySlice';
import {closeModal, selectModalOpen} from '../store/transactionSlice';
import React, {useEffect, useState} from 'react';
import {fetchCategory} from '../store/categoryThunk';
import {createTransaction} from '../store/transactionThunk';

const AddingModal = () => {

  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);
  const isOpenClose = useAppSelector(selectModalOpen);
  const displayName = ({display: isOpenClose ? 'block' : 'none'});
  const [form, setForm] = useState({
    type: 'expense',
    id: '',
    amount: '',
  });

  const categoryType = category.filter(category => category.type === form.type);

  useEffect(() => {
    if (isOpenClose) {
      dispatch(fetchCategory());
    }
  }, [isOpenClose, dispatch]);

  console.log(category);


  const close = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    setForm(prevState => ({
      ...prevState,
      id: '',
    }));
  }, [form.type]);

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(createTransaction({
      id: form.id,
      amount: parseFloat(form.amount),
      createdAt: (new Date().toISOString()),
    }));
    close();
  };

  return (
    <>
      <div className="modal-backdrop fade show" style={displayName}></div>
      <div className="modal" style={displayName}>
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={onSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" onClick={close}></button>
            </div>
            <div className="modal-body">
              <label htmlFor="type">Type</label>
              <select className="form-select form-select-lg mb-3"
                      id="type"
                      name="type"
                      value={form.type}
                      onChange={onFieldChange}
                      required
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
              <label htmlFor="id">Category</label>
              <select className="form-select form-select-lg"
                      id="id"
                      name="id"
                      value={form.id}
                      onChange={onFieldChange}
                      required
              >
                <option value="">Select Category</option>
                {categoryType.map(category => (
                  <option key={category.id}
                          value={category.id}
                  >
                    {category.name}
                  </option>
                ))}
              </select>

              <div className="mb-2">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input type="number"
                       placeholder="amount..."
                       className="form-control"
                       id="amount"
                       value={form.amount}
                       name="amount"
                       onChange={onFieldChange}
                       required
                />
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={close}>Close</button>
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddingModal;