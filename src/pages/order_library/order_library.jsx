import "../../App.css"
import Header from "../../partials/header";
import styles from "../../css/library.module.css"
import { useState } from "react";
import clsx from "clsx";

import keydown from "../../imgs/keyboard_arrow_down.svg"
import arrow from "../../imgs/ArrowLibraryMoreInfo.svg"
import calendar from "../../imgs/calendar.svg"
import skrepka from "../../imgs/skrepka.svg"
import like from "../../imgs/favorite_border.svg"
import mail from "../../imgs/mail_outline.svg"
import hammer from "../../imgs/si-glyph_law-hammer.svg"
import footer from "../../imgs/FOOTER.jpg"
import avatar from "../../imgs/avatar.svg"

const Search = ()=>{
    return(
        <div className={styles.search_container}>
            <input type="text" placeholder="Введите поисковый запрос..." className={styles.input}></input>
            <p className={styles.search_line}></p>
            <p className={styles.context_menu}>
                Везде
                <img src={keydown} alt="down" className={styles.keydown} />
            </p>
            <button className={styles.btn_search}>
                Найти заказ
            </button>
        </div>
    )
}

const Filtr = () =>{
    return(
        <div className={styles.filtr_box}>
            filtrs
        </div>
    )
}

const Order = (props) =>{

    const [description, setDescription] = useState(false);
    
    const changeDescription=()=>{
        if(description === true) setDescription(false);
        else setDescription(true);
    }

    return(
        <div className={styles.order}>
            <div className={styles.order_container}>
                <button onClick={()=>changeDescription()} className={clsx({[styles.btn_more_info]: true, [`${styles.btn_more_info} ${styles.showed}`]:description})}>
                    <p className={clsx({[styles.btn_more_info_txt]:true, [`${styles.btn_more_info_txt} ${styles.showed}`]:description})}>
                        <img className={styles.arrow} src={arrow} alt="" />
                        подробнее
                    </p>
                </button>
                <div className={styles.info_container}>
                        <div className={styles.date}>
                            <p className={styles.date}>{props.date_posted}</p>
                            <img className={styles.calendar} src={calendar} alt="" />
                            <p className={`${styles.date} ${styles.deadline}`}>{props.date_deadline}</p>
                        </div>
                    <div className={styles.info}>
                        <div className={`${styles.info} ${styles.header}`}>{props.header}</div>
                        <p className={`${styles.info} ${styles.characteristic}`}>
                            Тип работы:
                            <p className={`${styles.info} ${styles.props}`}>{props.type}</p>
                        </p>
                        <p className={`${styles.info} ${styles.characteristic}`}>
                            Предмет:
                            <p className={`${styles.info} ${styles.props}`}>{props.subject}</p>
                        </p>

                        <div className={`${styles.info} ${styles.files}`}>
                            <img className={styles.skrepka} src={skrepka} alt="" />
                            <p className={`${styles.info} ${styles.txt_file}`}>Файлы(2)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.actions_container}>
                    <p className={styles.otklik}>
                        <img className={`${styles.icon} ${styles.hammer}`} src={hammer} alt="" />
                        12 откликов
                    </p>
                    <p className={styles.budget}>
                        Бюджет:
                        <p className={styles.cost}>{props.cost}₽</p>
                    </p>
                    <p className={styles.refs}>
                        <img className={styles.icon} src={like} alt="" />
                        В избранное
                    </p>
                    <p className={styles.refs}>
                        <img className={styles.icon} src={mail} alt="" />
                        Сообщение
                    </p>
                </div>
            </div>
            <div className={clsx({[styles.order_description]:true, [styles.order_description_show]:description })}>
                <div className={styles.description_line}></div>
                <div className={styles.user_container}>
                    <img src={props.avatar} alt="" />
                    <div className={styles.point}></div>
                    <p className={styles.nickname}>{props.userName}</p>
                    <p className={styles.volume}>Объём:</p>
                    <p className={`${styles.volume} ${styles.count}`}>5-10 страниц</p>
                    <button className={styles.description_btn}>
                        Откликнуться
                    </button>
                </div>
                <div className={styles.description_line}></div>
                <div className={styles.description_container}>
                    <p className={styles.description}>Описание:</p>
                    <p className={`${styles.description} ${styles.txt}`}>{props.description}</p>
                </div>

            </div>
        </div>
        
    )
}

const Library = () =>{
    window.scrollBy(0, 0);
    return(
        <div className="container">
            <Header/>
            <div className={styles.main}>
                <h1 className={styles.name_h1}>Библиотека заказов</h1>
                <Search/>
                <Filtr/>
                <div className={styles.orders_container}>
                    <Order  date_posted = "19 апреля" 
                            date_deadline = "25 мая" 
                            header = "Источники по этнической истории России" 
                            type = "Контрольная работа" 
                            subject = "Геодезия"
                            cost = "5000"
                            userName = "Sirop"
                            avatar = {avatar}
                            description = "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст."/>

                    <Order  date_posted = "19 апреля" 
                            date_deadline = "25 мая" 
                            header = "Источники по этнической истории России" 
                            type = "Контрольная работа" 
                            subject = "Геодезия"
                            cost = "5000"
                            userName = "Sirop"
                            avatar = {avatar}
                            description = "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст."/>
                    <Order  date_posted = "19 апреля" 
                            date_deadline = "25 мая" 
                            header = "Источники по этнической истории России" 
                            type = "Контрольная работа" 
                            subject = "Геодезия"
                            cost = "5000"
                            userName = "Sirop"
                            avatar = {avatar}/>
                    <Order  date_posted = "19 апреля" 
                            date_deadline = "25 мая" 
                            header = "Источники по этнической истории России" 
                            type = "Контрольная работа" 
                            subject = "Геодезия"
                            cost = "5000"
                            userName = "Sirop"
                            avatar = {avatar}
                            description = "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст."/>
                    <Order  date_posted = "19 апреля" 
                            date_deadline = "25 мая" 
                            header = "Источники по этнической истории России" 
                            type = "Контрольная работа" 
                            subject = "Геодезия"
                            cost = "5000"
                            userName = "Sirop"
                            avatar = {avatar}
                            description = "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст."/>
                    <Order  date_posted = "19 апреля" 
                            date_deadline = "25 мая" 
                            header = "Источники по этнической истории России" 
                            type = "Контрольная работа" 
                            subject = "Геодезия"
                            cost = "5000"
                            userName = "Sirop"
                            avatar = {avatar}
                            description = "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст."/>
                </div>
            </div>
            <img className="delete" src={footer} alt="" />
        </div>
    )
}

export default Library;