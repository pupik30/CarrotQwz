import { useEffect, useRef, useState } from 'react';

import styles from './CircularSlider.module.scss';

import morkovImg from '../../assets/morkov.svg';
import tomatoImg from '../../assets/tomato.svg'
import peachesImg from '../../assets/peaches.svg';
import chiliImg from '../../assets/chili.svg';
import kornishImg from '../../assets/kornishkubanoch.svg';
import eggImg from '../../assets/egg.webp';
import DoctorKolbasImg from '../../assets/doctorkolbas.webp';
import { Photos } from '../../../Photos';

const productImages = {
    1: tomatoImg,
    2: kornishImg,
    3: peachesImg,
    4: chiliImg,
    5: morkovImg,
    6: eggImg,
    7: DoctorKolbasImg,
};

export default function CircularSlider() {
    const [products, setProducts] = useState([]);
    const [active, setActive] = useState(0);
    const [rotate, setRotate] = useState(0);
    const [currentImage, setCurrentImage] = useState(Photos.Cucan);

    const angleRef = useRef(0);

    useEffect(() => {
        fetch('http://localhost:3179/api/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.slice(0, 8));
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

const [isShaking, setIsShaking] = useState(false);

if (products.length === 0) {
    return <div>
        Loading... Svo svo svo 
        <img 
            src={currentImage}
            alt=""
            style={{
                opacity: 1,
                transition: 'all 0.08s ease',
                width: 200,
                transform: isShaking 
                    ? 'translate(3px, -2px) rotate(2deg) scale(1.15)' 

                    : 'translate(0, 0) rotate(-1deg) scale(1)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => {
                e.currentTarget.style.opacity = 0;
                setIsShaking(false);
            }}
            onMouseDown={() => setCurrentImage(Photos.Cucan2)}
            onMouseUp={() => setCurrentImage(Photos.Cucan)}
            onMouseMove={() => {
                setIsShaking(true);
                setTimeout(() => setIsShaking(false), 100); // Возврат в норму
            }}
        />
    </div>
}

    const step = 360 / products.length;
    const radius = 250;

    const activeProduct = products[active];

    const move = (dir) => {
        setRotate((prev) => prev + dir * step);

        setActive((prev) => {
            return (prev + dir + products.length) % products.length;
        });
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.textSide}>
                <div className={styles.textContent}>
                    <h1 className={styles.price}>
                        {activeProduct?.price ? `${activeProduct.price} ₽/шт` : 'Цена не указана'}
                    </h1>

                    <h2 className={styles.title}>{activeProduct?.name}</h2>

                    {activeProduct?.subtitle && (
                        <div className={styles.subtitle}>{activeProduct.subtitle}</div>
                    )}

                    <p className={styles.desc}>{activeProduct?.description}</p>

                    <div className={styles.buttons}>
                        <button className={styles.btnPrimary}>В корзину</button>

                        <button className={styles.btnOutline}>Подробнее</button>
                    </div>
                </div>
            </div>

            <div className={styles.sliderSide}>
                <div className={styles.container}>
                    <div
                        className={styles.circle}
                        style={{
                            transform: `rotate(${rotate}deg)`,
                            transition: 'transform 0.6s ease',
                        }}>
                        {products.map((product, i) => {
                            const angle = i * step;

                            return (
                                <div
                                    key={product.id}
                                    className={styles.item}
                                    onClick={() => {
                                        const diff = i - active;

                                        setRotate((prev) => prev - diff * step);
                                        setActive(i);
                                    }}
                                    style={{
                                        transform: `
                                rotate(${angle}deg)
                                translateY(-${radius}px)
                            `,
                                    }}>
                                    <div className={styles.itemCircle}>
                                        <img src={productImages[product.id]} alt={product.name} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.center}>
                        <img src={productImages[activeProduct?.id]} alt={activeProduct?.name} />
                    </div>

                    <button onClick={() => move(-1)} className={`${styles.btn} ${styles.btnLeft}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 4L12 20M12 20L18 14M12 20L6 14"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <button onClick={() => move(1)} className={`${styles.btn} ${styles.btnRight}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 4L12 20M12 20L18 14M12 20L6 14"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
