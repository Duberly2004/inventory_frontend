import AppRoutes from './routes/index.routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  document.querySelector('html')?.classList.add('dark')

  return (
    <ThemeProvider theme={darkTheme}>
    <AppRoutes key={1}/>
  </ThemeProvider>
  )
  
}

export default App
