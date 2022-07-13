import Layout from './components/Layout';
import Home from './pages/Home';
import Notice from './pages/Notice';
import Question from './pages/Question';
import Result from './pages/Result';
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
        </Routes>
      </HashRouter>
    </Layout>
  );
}

export default App;
