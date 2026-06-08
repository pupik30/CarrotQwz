import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './NewsSlider.module.scss';
import chuvstvo from '../../assets/chuvstvo.jpg';
import vegetables from '../../assets/veget_news.jpg';
import record from '../../assets/record.jpg';

const imagesById = {
    1: vegetables,
    2: chuvstvo,
    3: record,
    4: vegetables,
    5: chuvstvo,
};

export default function NewsSlider() {
    const [activePage, setActivePage] = useState(0);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3030/api/news')
            .then((res) => res.json())
            .then((data) => {
                setNews(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className={styles.categories}>
            <Swiper
                slidesPerView={3}
                slidesPerGroup={3}
                spaceBetween={20}
                onSlideChange={(swiper) => {
                    setActivePage(swiper.snapIndex);
                }}>
                {news.map((news) => (
                    <SwiperSlide key={news.id}>
                        <div className={styles.card}>
                            <div className={styles.image}>
                                <img src={imagesById[news.id]} alt={news.title} />
                            </div>
                            <div className={styles.title}>{news.title}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.progress}>
                <div
                    className={styles.progressActive}
                    style={{
                        transform: `translateX(${activePage * 275}%)`,
                    }}
                />
            </div>
        </section>
    );
}
