import AppRoutes from './routes/index.routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  document.querySelector('html')?.classList.add('dark')

  return (
    <ThemeProvider theme={darkTheme}>
      <QueryClientProvider client={queryClient}>

        <AppRoutes key={1} />
      </QueryClientProvider>
    </ThemeProvider>
  )

}

export default App
