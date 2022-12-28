import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const Authentication = ()=> {
  const navigate = useNavigate();
  return (
    <div>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse.credential
            );
          var decoded = jwt_decode(credentialResponse.credential);
          console.log(decoded);
          navigate('/calendar');
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}
