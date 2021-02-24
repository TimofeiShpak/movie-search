import './js/keyboard';
import 'swiper/css/swiper.min.css';
import 'swiper/js/swiper.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addCards } from './js/addCard';
import search from './js/search';
import './js/sortCard';

const NUMBER_PAGE = 1;
search();
addCards('dream', NUMBER_PAGE);
