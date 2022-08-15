import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const redirect = useNavigate();

  return (
    <header className='main-header'>
      <Button variant='contained' color='success' size='large' onClick={() => redirect('/users')}>
        Users
      </Button>
    </header>
  );
}

export default App;
