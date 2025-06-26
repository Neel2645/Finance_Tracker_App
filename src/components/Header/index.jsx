import { useEffect } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import userSvg from "../../assets/user.svg";
import { toast } from "react-toastify";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  function logout() {
    try {
      auth.signOut();
      toast.success("Logout Successfully...!");
      navigate("/");
    } catch (error) {
      toast.error("Error For Logout...!",error.message);
    }
  }

  const photourl = user?.photoURL;
  
  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate("/");
      } else {
        navigate("/dashboard");
      }
    }
  }, [user, loading]);

  console.log(user);

  return (
    <div className="navbar">
      <p className="logo">Financely.</p>
      {!loading && user && (
        <>
          <p className="link" onClick={logout}>
            <span style={{ marginRight: "1rem" }}>
              <img
                src={photourl || userSvg}
                width="30"
                alt="User"
                style={{ borderRadius: "50%" }}
              />
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default Header;
