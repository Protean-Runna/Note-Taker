import NoteMaker from './components/Notes';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react';
function App() {
  const [darkMode, setDarkmode] = useState(false);

  return (
    <>
      <div>
      <Header handleDarkModeToggle={setDarkmode} />
      <NoteMaker/>
      <Footer/>
      </div>
      
      
    </>
  );
}

export default App
