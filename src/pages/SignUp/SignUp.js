import React, { useState } from 'react';
import Input from './Input';
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

  const condition = {
    name: `input_${conditions.name ? 'title' : 'warn'}`,
    email: `input_${conditions.email ? 'title' : 'warn'}`,
    pw: `input_${conditions.pw ? 'title' : 'warn'}`,
    pwCorrect: `input_${conditions.pwCorrect ? 'title' : 'warn'}`,
  };

  return (
    <form className="sign_up">
      <strong className="title">회원가입</strong>

      <Input
        condition={condition.name}
        setInputValues={setInputValues}
        handleInput={handleInput}
        value={name}
      />

      <div className="input_box">
        <label className={condition.email}>이메일</label>
        <input
          name="email"
          className="input"
          type="email"
          onChange={handleInput}
          pattern={checkEmail}
          value={email}
          placeholder="이메일"
        />
      </div>
      <div className="input_box">
        <label className={condition.pw}>비밀번호</label>
        <input
          name="pw"
          className="input"
          type="password"
          autoComplete="off"
          onChange={handleInput}
          value={pw}
          placeholder="비밀번호"
        />
      </div>
      <div className="input_box">
        <label className={condition.pwCorrect}>비밀번호 확인</label>
        <input
          name="pwCorrect"
          className="input"
          type="password"
          autoComplete="off"
          onChange={handleInput}
          value={pwCorrect}
          placeholder="비밀번호 확인"
        />
      </div>

      <button onClick={signUp} type="submit" className="create_id">
        회원가입
      </button>
    </form>
  );
};

export default SignUp;
