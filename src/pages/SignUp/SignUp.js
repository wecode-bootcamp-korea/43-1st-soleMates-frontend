import React, { useState } from 'react';
import './SignUp.scss';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwCorrect, setPwCorrect] = useState('');
  const [changeButtonColor, setChangeButtonColor] = useState('');

  const saveName = e => {
    setName(e.target.value);
  };

  const saveEmail = e => {
    setEmail(e.target.value);
  };
  const savePw = e => {
    setPw(e.target.value);
  };
  const savePwCorrect = e => {
    setPwCorrect(e.target.value);
  };

  const onsubmit = () => {
    if (name.length >= 2 && pw === pwCorrect) {
      alert('회원가입 성공');
    } else {
      alert('실패');
    }
  };

  return (
    <form className="sign_up">
      <strong className="title">회원가입</strong>
      <div className="input_box">
        <label className="input_title">이름</label>
        <input
          type="text"
          className="input"
          onChange={saveName}
          value={name}
          placeholder="이름"
        />
      </div>
      <div className="input_box">
        <label className="input_title">이메일</label>
        <input
          className="input"
          type="email"
          onChange={saveEmail}
          pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
          minLength={1}
          value={email}
          placeholder="이메일"
        />
      </div>
      <div className="input_box">
        <label className="input_title">비밀번호</label>
        <input
          className="input"
          type="password"
          autoComplete="off"
          onChange={savePw}
          minLength={4}
          value={pw}
          placeholder="비밀번호"
        />
      </div>
      <div className="input_box">
        <label className="input_title">비밀번호 확인</label>
        <input
          className="input"
          type="password"
          autoComplete="off"
          onChange={savePwCorrect}
          value={pwCorrect}
          placeholder="비밀번호 확인"
        />
      </div>

      <button onSubmit={onsubmit} type="submit" className="create_id">
        회원가입
      </button>
    </form>
  );
};

export default SignUp;
