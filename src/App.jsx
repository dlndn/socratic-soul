import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import SelfReflectionPage from './pages/SelfReflectionPage/SelfReflectionPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';


function App() {
  return (
    <main className="app">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/self-reflection" element={<SelfReflectionPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App
