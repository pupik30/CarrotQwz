import { useState } from 'react';
import styles from './SaleItems.module.scss';

import malinaImg from '../../assets/malina.jpg';

const imagesMap = {
    1: malinaImg,
    2: malinaImg,
    3: malinaImg,
    4: malinaImg,
    5: malinaImg,
};

export default function SaleItems({ products }) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!products || products.length === 0) return null;

    const visibleProducts = products.slice(0, 5);
    const activeItem = visibleProducts[activeIndex];

    const next = () => {
        setActiveIndex((prev) => (prev + 1) % visibleProducts.length);
    };

    const prev = () => {
        setActiveIndex((prev) => (prev - 1 + visibleProducts.length) % visibleProducts.length);
    };

    return (
        <section className={styles.saleItems}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Акционные товары</h2>
                    <p className={styles.link}>Смотреть все</p>
                </div>

                <div className={styles.body}>
                    <div className={styles.leftBody}>
                        <div className={styles.text}>
                            <h3 className={styles.subtitle}>{activeItem.name}</h3>

                            <p className={styles.description}>{activeItem.description}</p>

                            <div className={styles.sales}>
                                <p className={styles.newPrice}>{activeItem.price} ₽/кг</p>

                                {activeItem.price_old && (
                                    <p className={styles.oldPrice}>{activeItem.price_old} ₽/кг</p>
                                )}
                            </div>

                            <div className={styles.button}>
                                <button className={styles.addCart}>В корзину</button>
                                <button className={styles.moreDetails}>Подробнее</button>
                            </div>

                            <div className={styles.controls}>
                                <button onClick={prev} className={styles.arrow}>
                                    ‹
                                </button>

                                <div className={styles.dots}>
                                    {visibleProducts.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveIndex(index)}
                                            className={`${styles.dot} ${
                                                index === activeIndex ? styles.activeDot : ''
                                            }`}
                                        />
                                    ))}
                                </div>

                                <button onClick={next} className={styles.arrow}>
                                    ›
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightBody}>
                        <div className={styles.img}>
                            <img src={imagesMap[activeItem.id]} alt={activeItem.name} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
