import React from 'react';
import Layout from './components/Layout';
import Loading from './components/Loading';
import Home from './pages/Home';
import Notice from './pages/Notice';
import Question from './pages/Question';
import Result from './pages/Result';
import Roadmap from './pages/Roadmap';
import {HashRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Layout>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </HashRouter>
    </Layout>
  );
}

export default App;
