import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Authentication } from './features/authentication/Authentication';
import { MyCalendar } from './features/MyCalendar';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={
            <GoogleOAuthProvider clientId="970051887302-1krks0j43fruumtg5g3hcegoeebemc4c.apps.googleusercontent.com">
              <Authentication/>
            </GoogleOAuthProvider>
          } />
          <Route path="/calendar" element={<MyCalendar />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;