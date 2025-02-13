// import * as ReactDOM from 'react-dom/client';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import CharacterList from './pages/CharacterList/CharacterList';
// import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
// import Footer from './components/Footer/Footer';
// import Layout from './components/Layout';
// import { ThemeProvider } from './hooks/themeContext';
// import { useState } from 'react';

// const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   return (
//     <Router>
//       <Layout onSearch={setSearchQuery}>
//         <Routes>
//           <Route path="/" element={<CharacterList searchQuery={searchQuery} />} />
//           <Route path="/character/:id" element={<CharacterDetails />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// function render() {
//   const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
//   root.render(
//     <ThemeProvider>
//       <App />
//       <Footer />
//     </ThemeProvider>
//   );
// }

// render();


import * as ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from './pages/CharacterList/CharacterList';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';
import { ThemeProvider } from './hooks/themeContext';
import Layout from './components/Layout';

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
    <ThemeProvider>
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  );
}

render();

