import React from 'react';
import styles from '@/components/Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <div>
      <nav className={styles.NavMenu}>
        <ul className={styles.NavList}>
            <li className ={styles.NavLogo}>Test</li>
            <li><a href="#">OnePage</a>
                <ul className = {styles.NavDropdown}>
                    <li><a href="./">메인</a></li>
                    <li><a href="./Login">로그인</a></li>
                    <li><a href="#multimedia">회원가입</a></li>
                    <li><a href="#tag">회원정보 찾기</a></li>
                    <li><a href="#table">1:1 문의</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    </div>
  );
}

export default Navigation;