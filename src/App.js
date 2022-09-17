import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import BioPage from './pages/BioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import My404Page from './pages/My404Page';
import ProjectsPage from './pages/ProjectsPage';
import ResourcesPage from './pages/ResourcesPage';
import SkillsPage from './pages/SkillsPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='*' element={<My404Page />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/bio' element={<BioPage />} />
          <Route path='/skills' element={<SkillsPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/resources' element={<ResourcesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
