import React from 'react';
import styles from '@/pages/Login.module.css';
import Navigation from '@/components/Navigation';

const Login: React.FC = () => {
  return(
    <div>
      <Navigation />
      <div className={styles.loginwrapper}>
        <h2>Login</h2>
          <input 
            type="text" 
            className={styles.loginid} 
            placeholder="아이디를 입력해주세요"  
          />
          <input 
            type="text" 
            className={styles.loginpw}
            placeholder="비밀번호를 입력해주세요"  
          />
          <input type="checkbox" id="remember-check" />아이디 저장하기 <br/>
          <button className={styles.loginbutton}>로그인</button>
          <button className={styles.signupbutton}>회원가입</button>
      </div>
    </div>
  );
}

export default Login;