import { Button } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button startIcon={SettingsIcon} variant="contained">Settings</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}

export default App;
