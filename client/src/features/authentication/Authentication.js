import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { authentication, getUser } from "./authenticationSlice";

export const Authentication = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  return (
    <div>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse.credential);
          var decoded = jwt_decode(credentialResponse.credential);
          console.log(decoded);
          dispatch(authentication({
            email: decoded.email,
            familyName: decoded.family_name,
            givenName: decoded.given_name,
          }));
          navigate('/calendar');
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}
