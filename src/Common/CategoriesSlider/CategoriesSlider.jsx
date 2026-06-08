import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from './CategoriesSlider.module.scss';
import milk from '../../assets/milk.jpg';
import meat from '../../assets/meat.jpg';
import vegetables from '../../assets/veget_popul.jpg';

import berries from '../../assets/berries.jpg';

const categories = [
    { id: 1, title: 'Молочная продукция', image: milk },
    { id: 2, title: 'Мясная продукция', image: meat },
    { id: 3, title: 'Овощи', image: vegetables },
    { id: 4, title: 'Ягоды', image: berries },
    { id: 5, title: 'Молочная продукция', image: milk },
    { id: 6, title: 'Мясная продукция', image: meat },
    { id: 7, title: 'Овощи', image: vegetables },
    { id: 8, title: 'Ягоды', image: berries },
    { id: 9, title: 'Молочная продукция', image: milk },
    { id: 10, title: 'Мясная продукция', image: meat },
    { id: 11, title: 'Овощи', image: vegetables },
    { id: 12, title: 'Ягоды', image: berries },
];

export default function CategoriesSlider() {
    const [activePage, setActivePage] = useState(0);

    return (
        <section className={styles.categories}>
            <Swiper
                slidesPerView={4}
                slidesPerGroup={4}
                spaceBetween={20}
                onSlideChange={(swiper) => {
                    setActivePage(swiper.snapIndex);
                }}>
                {categories.map((category) => (
                    <SwiperSlide key={category.id}>
                        <div className={styles.card}>
                            <div className={styles.image}>
                                <img src={category.image} />
                            </div>
                            <div className={styles.title}>{category.title}</div>
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
