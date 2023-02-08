import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Page404 from './components/Page404';
import NewPost from './components/NewPost';
import ViewPost from './components/ViewPost';
import EditPost from './components/EditPost';

function App() {
  return (
    <div
      className='container p-2'
      style={{ width: 800 + 'px', backgroundColor: '#dee2e6' }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<ViewPost />} />
        <Route path='/posts/new' element={<NewPost />} />
        <Route path='/posts/:id/edit' element={<EditPost />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
