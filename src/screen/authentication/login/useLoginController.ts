import { useContext, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../../../context/authContext/AuthContext";

const useLoginController = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);

  const EMAIL = "maria@gmail.com";
  const PASSWORD = "12345678";

  const login = () => {
    setError("");
    if (form.email === EMAIL && form.password === PASSWORD) {
      const token = "ahEIQOSH219277*Aell11";
      signIn(token);
    } else setError("Credenciales incorrectas");
  };

  const onChangeEmail = (email: string) =>
    setForm((prev) => ({ ...prev, email }));
  const onChangePassword = (password: string) =>
    setForm((prev) => ({ ...prev, password }));

  return {
    form,
    onChangeEmail,
    onChangePassword,
    login,
    error,
  };
};

export default useLoginController;
