import Appbar from './components/AppBar/AppBar';
import {Route, Routes} from 'react-router-dom';
import Tracker from './Pages/Tracker';
import AddingModal from './Pages/AddingModal';
import CategoryForm from './Pages/CategoryForm';
import Category from './Pages/Category';

const App = () => {

  return (
    <>
     <header>
       <Appbar />
     </header>
      <main className="container mt-2">
        <Routes>
          <Route path="/" element={<Tracker />} />
          <Route path="/category" element={<Category/>} />
          <Route path="/modal" element={<AddingModal/>} />
          <Route path="/form" element={<CategoryForm/>} />
          <Route path="*" element={<h1>Page Doesn't Exist</h1>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
