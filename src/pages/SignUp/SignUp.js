import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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

  const location = useLocation();
  const CURRENT_DATA =
    location.pathname === '/login' ? LOGIN_DATA : SIGNUP_DATA;

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
            location.pathname = '/login';
          } else {
            alert('중복된 이메일입니다.');
            event.preventDefault();
          }
        });
    } else {
      alert('다시 확인해주세요');
    }
  };

  const logIn = event => {
    if (pw.length >= 4 && checkEmail) {
      event.preventDefault();
      fetch('http://10.58.52.150:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email: email,
          password: pw,
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.accessToken) {
            localStorage.setItem('token', data.accessToken);
          } else {
            alert('잘못된 이메일입니다.');
            event.preventDefault();
          }
        });
    } else {
      alert('다시 확인해주세요');
    }
  };

  const submit = location.pathname === '/login' ? logIn : signUp;

  return (
    <form className="sign_up">
      <strong className="title">
        {location.pathname === '/login' ? '로그인' : '회원가입'}
      </strong>
      {CURRENT_DATA.map(({ id, title, type, name }) => {
        return (
          <div className="input_box" key={id}>
            <label className={`input_${conditions[name] ? 'title' : 'warn'}`}>
              {title}
            </label>
            <input
              name={name}
              className="input"
              type={type}
              autoComplete={name.includes('pw') ? 'off' : undefined}
              onChange={handleInput}
              value={inputValues[name]}
              placeholder={title}
            />
          </div>
        );
      })}

      <button onClick={submit} type="submit" className="create_id">
        회원가입
      </button>
    </form>
  );
};

export default SignUp;

const SIGNUP_DATA = [
  { id: 1, title: '이름', type: 'text', name: 'name' },
  { id: 2, title: '이메일', type: 'email', name: 'email' },
  { id: 3, title: '비밀번호', type: 'password', name: 'pw' },
  { id: 4, title: '비밀번호확인', type: 'password', name: 'pwCorrect' },
];

const LOGIN_DATA = [
  { id: 1, title: '이메일', type: 'email', name: 'email' },
  { id: 2, title: '비밀번호', type: 'password', name: 'pw' },
];
