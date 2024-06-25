import React, { useEffect } from 'react';
import styles from '@/pages/MainPage.module.css'; // 올바른 경로 확인
import carousel1 from '../images/carousel1.jpg';
import carousel2 from '../images/carousel2.jpg';
import carousel3 from '../images/carousel3.jpg';
import news1 from '../images/News.jpg';
import WeatherComponent from '@/components/WeatherComponent';

declare global {
  interface Window {
    bootstrap: any;
  }
}

const MainPage: React.FC = () => {
  useEffect(() => {
    if (window.bootstrap) {
      const carouselElement = document.querySelector('#carouselExampleControlsNoTouching');
      if (carouselElement) {
        new window.bootstrap.Carousel(carouselElement);
      }
    }
  }, []);

  return (
    <div className={styles.MainContent}>
      <div id="carouselExampleControlsNoTouching" className={`carousel slide ${styles.MainCarousel}`} data-bs-touch="false" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src={carousel1.src} className="d-block w-100" alt="carousel1"/>
          </div>
          <div className="carousel-item">
            <img src={carousel2.src} className="d-block w-100" alt="placeholder1"/>
          </div>
          <div className="carousel-item">
            <img src={carousel3.src} className="d-block w-100" alt="placeholder2"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className={styles.MainPage}>
        <div className={styles.MainNews1}>
          <h3>테스트 소식</h3>
          <img src={news1.src} className={styles.news1}/>
        </div>
        <div className={styles.MainNews2}>
          <h3>테스트 소식</h3>
          <img src={news1.src} className={styles.news1}/>
        </div>
        <div className={styles.MainNews3}>
          <h3>테스트 소식</h3>
          <img src={news1.src} className={styles.news1}/>
        </div>
      </div>
      <div className={styles.MainContent2}>
        <div className={styles.MainInfo}>
          <WeatherComponent />
        </div>
        <div className={styles.MainMedia}>
          
        </div>
      </div>
    </div>
  );
}

export default MainPage;