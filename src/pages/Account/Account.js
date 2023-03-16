import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Account.scss';

const Account = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    pw: '',
    pwCorrect: '',
  });

  const { name, email, pw, pwCorrect } = inputValues;

  const location = useLocation();
  const currentPage = location.pathname === '/login' ? LOGIN_DATA : SIGNUP_DATA;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const checkEmail = email.match('[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-z]{2,3}$');
  const pwCheck = pw.match(
    '^.*(?=^.{8,15}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$'
  );

  const conditions = {
    name: name.length === 0 || name.length >= 2,
    email: email.length === 0 || checkEmail,
    pw: pw.length === 0 || pwCheck,
    pwCorrect: pw === pwCorrect,
  };
  const navigate = useNavigate();

  const signUp = event => {
    if (name.length >= 2 && pwCheck && pwCorrect === pw && checkEmail) {
      event.preventDefault();
      fetch('http://10.58.52.169:3000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          name,
          email,
          password: pw,
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === 'SUCCESS_SIGNUP') {
            localStorage.setItem('token', data.token);
            alert('회원가입 성공');
            navigate('/login');
          }
        });
    } else {
      alert('다시 확인해주세요');
    }
  };

  const logIn = event => {
    event.preventDefault();
    fetch('http://10.58.52.169:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          navigate('/');
        } else {
          alert('다시 시도해주세요.');
        }
      });
  };

  const submit = location.pathname === '/login' ? logIn : signUp;

  return (
    <>
      <form className="account">
        <strong className="title">
          {location.pathname === '/login' ? '로그인' : '회원가입'}
        </strong>
        {currentPage.map(({ id, title, type, name, placeholder }) => {
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
                placeholder={placeholder}
              />
            </div>
          );
        })}

        <button onClick={submit} type="submit" className="account_button">
          {location.pathname === '/login' ? '로그인' : '회원가입'}
        </button>
      </form>
      <strong>
        {location.pathname === '/login' && (
          <Link className="sign_up" to="/signup">
            회원가입
          </Link>
        )}
      </strong>
    </>
  );
};

export default Account;

const SIGNUP_DATA = [
  { id: 1, title: '이름', type: 'text', name: 'name', placeholder: '이름' },
  {
    id: 2,
    title: '이메일',
    type: 'email',
    name: 'email',
    placeholder: '이메일',
  },
  {
    id: 3,
    title: '비밀번호',
    type: 'password',
    name: 'pw',
    placeholder: '특수문자 / 문자 / 숫자 포함 형태의 8~15자리',
  },
  {
    id: 4,
    title: '비밀번호 확인',
    type: 'password',
    name: 'pwCorrect',
    placeholder: '비밀번호 확인',
  },
];

const LOGIN_DATA = [
  {
    id: 1,
    title: '이메일',
    type: 'email',
    name: 'email',
    placeholder: '이메일',
  },
  {
    id: 2,
    title: '비밀번호',
    type: 'password',
    name: 'pw',
    placeholder: '비밀번호',
  },
];
