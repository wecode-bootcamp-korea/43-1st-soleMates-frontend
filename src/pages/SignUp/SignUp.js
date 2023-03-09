import React, { useState } from 'react';
// import Input from './Input';
import './SignUp.scss';

const SignUp = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    pw: '',
    pwCorrect: '',
  });

  const { name, email, pw, pwCorrect } = inputValues;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const checkEmail = email.match(
    '[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*'
  );

  const conditions = {
    name: name.length === 0 || name.length >= 2,
    email: email.length === 0 || checkEmail,
    pw: pw.length === 0 || pw.length >= 4,
    pwCorrect: pw === pwCorrect,
  };

  const signUp = event => {
    if (name.length >= 2 && pw.length >= 4 && pwCorrect === pw && checkEmail) {
      event.preventDefault();
      fetch('http://10.58.52.150:8000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          name: `${name}`,
          email: `${email}`,
          password: `${pw}`,
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.accessToken) {
            localStorage.setItem('token', data.accessToken);
          } else {
            alert('중복된 이메일입니다.');
            event.preventDefault();
          }
        });
    }

    return null;
  };

  return (
    <form className="sign_up">
      <strong className="title">회원가입</strong>

      {Object.keys(inputValues).map(key => {
        const value = inputValues[key];
        const label =
          key === 'name'
            ? '이름'
            : key === 'pw'
            ? '비밀번호'
            : key === 'email'
            ? '이메일'
            : key === 'pwCorrect'
            ? '비밀번호 확인'
            : key;
        const type = key.includes('pw')
          ? 'password'
          : key === 'email'
          ? 'email'
          : 'text';
        const className = `input_${conditions[key] ? 'title' : 'warn'}`;

        return (
          <div className="input_box" key={key}>
            <label className={className}>{label}</label>
            <input
              name={key}
              className="input"
              type={type}
              autoComplete={key.includes('pw') ? 'off' : undefined}
              onChange={handleInput}
              value={value}
              placeholder={label}
            />
          </div>
        );
      })}

      <button onClick={signUp} type="submit" className="create_id">
        회원가입
      </button>
    </form>
  );
};

export default SignUp;
