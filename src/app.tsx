import * as ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from './pages/CharacterList/CharacterList';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import Footer from './components/Footer/Footer';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CharacterList />} />
      <Route path="/character/:id" element={<CharacterDetails />} />
    </Routes>
  </Router>
);

function render() {
  const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
  root.render(
    <>
      <App />
      <Footer />
    </>
  );
}

render();
