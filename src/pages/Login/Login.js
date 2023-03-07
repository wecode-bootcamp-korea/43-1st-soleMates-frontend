import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    pw: '',
  });
  const { email, pw } = inputValues;
  console.log(inputValues);

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const conditions = {
    email:
      email.length === 0 ||
      email.match('[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*'),
    pw: pw.length === 0 || pw.length >= 4,
  };

  const onclick = event => {
    if (
      pw.length >= 4 &&
      email.match('[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*')
    ) {
      alert('성공');
    } else {
      alert('실패');
      event.preventDefault();
    }
  };

  return (
    <form className="login">
      <strong className="title">로그인</strong>
      <div className="input_box">
        <label className={`input_${conditions.email ? 'title' : 'warn'}`}>
          이메일
        </label>
        <input
          name="email"
          className="input"
          type="email"
          onChange={handleInput}
          pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
          value={email}
          placeholder="이메일"
        />
      </div>{' '}
      <div className="input_box">
        <label className={`input_${conditions.pw ? 'title' : 'warn'}`}>
          비밀번호
        </label>
        <input
          name="pw"
          className="input"
          type="password"
          onChange={handleInput}
          value={pw}
          placeholder="비밀번호"
        />
      </div>
      <button onClick={onclick} className="button">
        로그인
      </button>
    </form>
  );
};

export default Login;
