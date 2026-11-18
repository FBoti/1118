import { Routes, Route, NavLink } from 'react-router-dom';
import { ChessListPage } from './pages/ChessListPage';
import { ChessSinglePage } from './pages/ChessSinglePage';
import { ChessCreatePage } from './pages/ChessCreatePage';
import { ChessDeletePage } from './pages/ChessDeletePage';
import './App.css';
import { ChessModPage } from './pages/ChessMondPage';

export const App = () => {
  return (
    <>
    <nav class="d-flex gap-4 p-3 fs-3">
      <NavLink to="/" className="nav-link">
      <i className="bi bi-house-door-fill me-2"></i>
      Sakkozók</NavLink>
      <NavLink to="/new-chess" className="nav-link">
      <i className="bi bi-info-circle-fill me-2"></i>
      Új sakkozó</NavLink>
    </nav>
      <Routes>
        <Route path="/" element={<ChessListPage/>}/>
        <Route path="/chess/:chessId" element={<ChessSinglePage/>}/>
        <Route path="/new-chess" element={<ChessCreatePage/>}/>
        <Route path="/mod-chess/:chessId" element={<ChessModPage/>}/>
        <Route path="/del-chess/:chessId" element={<ChessDeletePage/>}/>
      </Routes>
    </>
  )
};
