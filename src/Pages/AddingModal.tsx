
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {selectCategory} from '../store/categorySlice';
import {closeModal, selectModalOpen} from '../store/transactionSlice';

const AddingModal = () => {

  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);
  const isOpenClose = useAppSelector(selectModalOpen);
  const displayName = ({display: isOpenClose ? "block" : "none"});

  const close = () => {
    dispatch(closeModal());
  }

  return (
    <>
      <div className="modal-backdrop fade show" style={displayName}></div>
      <div className="modal" style={displayName}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" onClick={close}></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={close}>Close</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddingModal;