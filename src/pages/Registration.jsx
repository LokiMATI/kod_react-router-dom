import React from "react";
import Header from "../components/Header";

function Registration() {

    const [login, setLogin] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");

    return (
        <div>
            <Header />
            <form>
                <p>Логин</p>
                <p><input type="text" onChange={(e) => setLogin(e.target.value)}/></p>
                <p>Почта</p>
                <p><input type="text" onChange={(e) => setEmail(e.target.value)}/></p>
                <p>Пароль</p>
                <p><input type="text" onChange={(e) => setPassword(e.target.value)}/></p>
                <p>Подтверждение пароля</p>
                <p><input type="text" onChange={(e) => setPasswordConfirm(e.target.value)}/></p>
                <p>
                    <button type="submit">Зарегистрироваться</button> 
                </p>
            </form>
        </div>
    )
    if (password === passwordConfirm) {
        console.log(login, email, password);
    }
}

export default Registration