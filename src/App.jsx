import { useDispatch, useSelector } from "react-redux";
import Authentication from "./Authentication/Authentication.jsx";
import HomePage from "./HomePage";
import "./index.css";
import { useEffect } from "react";
import { auth } from "./firebase.jsx";
import { loginUser, setLoading } from "./features/userSlice.jsx";
import AddPost from "./Navigation/addPost.jsx";

function App() {
  const user = useSelector((state) => state.data.user.user);
  // console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // if a user exists we want to put it in redux state
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("User is not logged in");
      }
    });
  }, []);
  return (
    <div className="app">
      {/* <AddPost /> */}
      {user ? <HomePage /> : <Authentication />}
    </div>
  );
}

export default App;
