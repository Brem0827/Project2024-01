import React from 'react';
import './components/main.css';

function Navigation() {
  return (
    <div>
      <nav className="Menu">
        <ul>
            <li className = "logo">이현종</li>
            <li><a href="#">OnePage</a>
                <ul className = "dropdown">
                    <li><a href="#">메인</a></li>
                    <li><a href="#box">박스</a></li>
                    <li><a href="#multimedia">멀티미디어</a></li>
                    <li><a href="#tag">오디오,비디오 태그</a></li>
                    <li><a href="#table">테이블</a></li>
                    <li><a href="#grid">그리드</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    </div>
  );
}

export default Navigation;