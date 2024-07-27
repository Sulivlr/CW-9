import Appbar from './components/AppBar/AppBar';
import {Route, Routes} from 'react-router-dom';
import Categories from './Pages/Categories';
import Tracker from './Pages/Tracker';
import AddingModal from './Pages/AddingModal';

const App = () => {

  return (
    <>
     <header>
       <Appbar />
     </header>
      <main className="container mt-2">
        <Routes>
          <Route path="/" element={<Tracker />} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/modal" element={<AddingModal/>} />
          <Route path="*" element={<h1>Page Doesn't Exist</h1>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
