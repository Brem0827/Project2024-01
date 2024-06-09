import Navigation from '@/components/Navigation';
import MainPage from '@/pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <MainPage />
    </>
  );
};

export default Home