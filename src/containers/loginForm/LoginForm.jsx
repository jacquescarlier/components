import { useState } from "react";
import Button from "../../components/button/Button"
import InputForm from "../../components/input/InputForm"
import LabelForm from "../../components/label/LabelForm"
import "./loginForm.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <form id="logIn">
        <h2>button, input & label components</h2>
      <div className="input-wrapper">
        <LabelForm
          labelTitle="Username"
          htmlFor="email"
        />
        <InputForm
          name="email"
          type="email"
          inputId="email"
          autocomplete="email"
          
        />
      </div>
      <div className="input-wrapper">
        <LabelForm
          labelTitle="Password"
          htmlFor="password"
        />
        <InputForm
          name="password"
          type="password"
          inputId="password"
          autocomplete="password"
          
        />
      </div>
     
      <div className="input-remember">
        <InputForm
          name="remember-me"
          type="checkbox"
          inputId="remember-me"
        />
        <LabelForm
          labelTitle="Remember me"
          htmlFor="remember-me"
        />
      </div>
      <Button
        classButton="sign-in-button"
        title="Sign In"
        type="onClick"
        
      />
    </form>
  );
}
