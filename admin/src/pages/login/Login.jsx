import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        marginTop: "20vh",
        display: "flex",
        flexDirection: "column",
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{
          padding: 10,
          margin: "20px 20%",
          marginBottom: 20,
        }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{
          padding: 10,
          margin: "20px 20%",
          marginBottom: 20,
        }}
        type="password"
        placeholder="password"
        nChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleClick}
        style={{ padding: 10, margin: "20px 20%", width: 100 }}
      >
        Login
      </button>
    </div>
  );
};
export default Login;
