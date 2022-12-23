import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

function App() {
  return (
    <div className="App">
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse.credential
            );
          var decoded = jwt_decode(credentialResponse.credential);
          console.log(decoded);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}

export default App;
