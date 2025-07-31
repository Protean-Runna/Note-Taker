import NoteTracker from './components/NoteTracker';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react';
function App() {
  const [darkMode, setDarkmode] = useState(false);

  return (
    <>
      <div>
      <Header handleDarkModeToggle={setDarkmode} />
      <NoteTracker/>
      <Footer/>
      </div>
      
      
    </>
  );
}

export default App
