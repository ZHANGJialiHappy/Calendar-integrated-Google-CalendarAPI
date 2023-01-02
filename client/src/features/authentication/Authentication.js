import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch} from "react-redux";
import { authentication} from "./authenticationSlice";

export const Authentication = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <GoogleLogin
        onSuccess={credentialResponse => {
          const decoded = jwt_decode(credentialResponse.credential);
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
