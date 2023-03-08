import React, { useState } from 'react';
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

  const conditions = {
    name: name.length === 0 || name.length >= 2,
    email:
      email.length === 0 ||
      email.match('[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*'),
    pw: pw.length === 0 || pw.length >= 4,
    pwCorrect: pw === pwCorrect,
  };

  const onclick = event => {
    if (
      name.length >= 2 &&
      pw.length >= 4 &&
      pwCorrect === pw &&
      email.match('[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*')
    ) {
      alert('성공');
    } else {
      alert('실패');
      event.preventDefault();
    }
  };

  return (
    <form className="sign_up">
      <strong className="title">회원가입</strong>
      <div className="input_box">
        <label className={`input_${conditions.name ? 'title' : 'warn'}`}>
          이름
        </label>
        <input
          name="name"
          type="text"
          className="input"
          onChange={handleInput}
          value={name}
          placeholder="이름"
        />
      </div>
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
      </div>
      <div className="input_box">
        <label className={`input_${conditions.pw ? 'title' : 'warn'}`}>
          비밀번호
        </label>
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
        <label className={`input_${conditions.pwCorrect ? 'title' : 'warn'}`}>
          비밀번호 확인
        </label>
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

      <button onClick={onclick} type="submit" className="create_id">
        회원가입
      </button>
    </form>
  );
};

export default SignUp;
