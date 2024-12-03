import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "@/components/Theme/theme-provider"
import Home from "./Pages/Home"
import { Route, Routes, Navigate } from 'react-router-dom';
import FutureFeatures from './Pages/Future';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/future" element={<FutureFeatures />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App