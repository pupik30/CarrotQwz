import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import styles from './Bottom.module.scss';
import {Photos} from '../../../Photos.js'



export default function Bottom(){
return(
<>
<footer>
    <div className={styles.BottomBlock}>
        <div className={styles.BottomBlockSRING}>
            <div className={styles.BottomBlockMain}>
                <img src={Photos.logoTDA} alt="" className={styles.TDAlogo} />

                <ul className={styles.BottomBlock_Column_one}>
                    <li className={styles.Column_B}>
                        <p href="#">О компании</p>
                    </li>
                    <li>
                        <a href="#">Новости</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                    <li>
                        <a href="#">Пользовательское соглашение</a>
                    </li>
                    <li>
                        <a href="#">Политика обработки персональных данных</a>
                    </li>
                </ul>

                <ul className={styles.BottomBlock_Column_two}>
                    <li className={styles.Column_B}>
                        <p href="#">Покупателям</p>
                    </li>
                    <li>
                        <a href="#">Доставка и оплата</a>
                    </li>
                    <li>
                        <a href="#">Как вернуть</a>
                    </li>
                    <li>
                        <a href="#">Как заказать</a>
                    </li>
                    <li>
                        <a href="#">Программа лояльности</a>
                    </li>
                    <li>
                        <a href="#">Вопросы и ответы</a>
                    </li>
                    <li>
                        <a href="#">Юридическим лицам</a>
                    </li>
                </ul>

                <div className={styles.BottomBlock_Column_three}>
                    <div className={styles.EmailBlock}>
                        <p className={styles.EmailBlockText}>Подписаться на рассылку актуальных новостей:</p>

                        <div className={styles.email_block}>
                            <input className="email-block" type="email" placeholder="Email" />
                            <button>
                                <img src={Photos.Mail} alt="" />
                                <span className={styles.Divider}></span>
                                <span className={styles.ButtonText}>Подписаться</span>
                            </button>
                        </div>
                         <div className={styles.PhoneBottomBlock}>
                            <p className={styles.EmailBlockText}>Заказывайте товары круглосуточно 
                                и задавайте вопросы</p>
                            <p className={styles.EmailBlockNumber}>8 800 123-45-67</p>
                        </div>
                    </div>
                </div>

               
            </div> 
        </div>
            <div className={styles.BottomBlock_SocMedia}>
                <p>© Интернет-магазин “TDA”</p>
                <img src={Photos.social} alt="" />
            </div>
    </div>
</footer>
</>
)
}