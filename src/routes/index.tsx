import { Button } from '@mui/material';
import {Routes, Route, Navigate } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts';

export const AppRouter = () => {
  const {toggleTheme} = useAppThemeContext();
  return (
    <Routes>
      <Route path="/home_screen" element={<Button variant='contained' color='primary' onClick={toggleTheme}>Teste</Button>} />
      <Route path="*" element={<Navigate to="home_screen"/>} />
    </Routes>
  );
}