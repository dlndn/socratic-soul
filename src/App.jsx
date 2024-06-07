import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import SelfReflectionPage from './pages/SelfReflectionPage/SelfReflectionPage';

function App() {
  return (
    <main className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/self-reflection" element={<SelfReflectionPage />} />
      </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App
