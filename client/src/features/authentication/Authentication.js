import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { authentication as save } from "./authenticationSlice"; 

export const Authentication = ()=> {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse.credential);
          var decoded = jwt_decode(credentialResponse.credential);
          console.log(decoded);
          dispatch(save);
          navigate('/calendar');
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}
