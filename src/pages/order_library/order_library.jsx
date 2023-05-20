import "../../App.css"
import Header from "../../partials/header";
import style from "../../css/library.module.css"

import keydown from "../../imgs/keyboard_arrow_down.svg"
import arrow from "../../imgs/ArrowLibraryMoreInfo.svg"
import calendar from "../../imgs/calendar.svg"
import skrepka from "../../imgs/skrepka.svg"
import like from "../../imgs/favorite_border.svg"
import mail from "../../imgs/mail_outline.svg"
import hammer from "../../imgs/si-glyph_law-hammer.svg"
import footer from "../../imgs/FOOTER.jpg"

const Search = ()=>{
    return(
        <div className={style.search_container}>
            <input type="text" placeholder="Введите поисковый запрос..." className={style.input}></input>
            <p className={style.search_line}></p>
            <p className={style.context_menu}>
                Везде
                <img src={keydown} alt="down" className={style.keydown} />
            </p>
            <button className={style.btn_search}>
                Найти заказ
            </button>
        </div>
    )
}

const Filtr = () =>{
    return(
        <div className={style.filtr_box}>
            filtrs
        </div>
    )
}

const Order = (props) =>{
    return(
        <div className={style.order_container}>
            <button className={style.btn_more_info}>
                <p className={style.btn_more_info_txt}>
                    <img className={style.arrow} src={arrow} alt="" />
                    подробнее
                </p>
            </button>
            <div className={style.info_container}>
                    <div className={style.date}>
                        <p className={style.date}>{props.date_posted}</p>
                        <img className={style.calendar} src={calendar} alt="" />
                        <p className={`${style.date} ${style.deadline}`}>{props.date_deadline}</p>
                    </div>
                <div className={style.info}>
                    <div className={`${style.info} ${style.header}`}>{props.header}</div>
                    <p className={`${style.info} ${style.characteristic}`}>
                        Тип работы:
                        <p className={`${style.info} ${style.props}`}>{props.type}</p>
                    </p>
                    <p className={`${style.info} ${style.characteristic}`}>
                        Предмет:
                        <p className={`${style.info} ${style.props}`}>{props.subject}</p>
                    </p>

                    <div className={`${style.info} ${style.files}`}>
                        <img className={style.skrepka} src={skrepka} alt="" />
                        <p className={`${style.info} ${style.txt_file}`}>Файлы(2)</p>
                    </div>
                </div>
            </div>
            <div className={style.actions_container}>
                <p className={style.otklik}>
                    <img className={`${style.icon} ${style.hammer}`} src={hammer} alt="" />
                    12 откликов
                </p>
                <p className={style.budget}>
                    Бюджет:
                    <p className={style.cost}>{props.cost}₽</p>
                </p>
                <p className={style.refs}>
                    <img className={style.icon} src={like} alt="" />
                    В избранное
                </p>
                <p className={style.refs}>
                    <img className={style.icon} src={mail} alt="" />
                    Сообщение
                </p>
            </div>
            
        </div>
    )
}

const Library = () =>{
    window.scrollBy(0, 0);
    return(
        <div className="container">
            <Header/>
            <div className={style.main}>
                <h1 className={style.name_h1}>Библиотека заказов</h1>
                <Search/>
                <Filtr/>
                <div className={style.orders_container}>
                    <Order  date_posted = "19 апреля" 
                            date_deadline = "25 мая" 
                            header = "Источники по этнической истории России" 
                            type = "Контрольная работа" 
                            subject = "Геодезия"
                            cost = "5000"/>
                    <Order  date_posted = "19 апреля" 
                            date_deadline = "25 мая" 
                            header = "Источники по этнической истории России" 
                            type = "Контрольная работа" 
                            subject = "Геодезия"
                            cost = "5000"/>
                    <Order  date_posted = "19 апреля" 
                            date_deadline = "25 мая" 
                            header = "Источники по этнической истории России" 
                            type = "Контрольная работа" 
                            subject = "Геодезия"
                            cost = "5000"/>
                    <Order  date_posted = "19 апреля" 
                            date_deadline = "25 мая" 
                            header = "Источники по этнической истории России" 
                            type = "Контрольная работа" 
                            subject = "Геодезия"
                            cost = "5000"/>
                    <Order  date_posted = "19 апреля" 
                            date_deadline = "25 мая" 
                            header = "Источники по этнической истории России" 
                            type = "Контрольная работа" 
                            subject = "Геодезия"
                            cost = "5000"/>
                    <Order  date_posted = "19 апреля" 
                            date_deadline = "25 мая" 
                            header = "Источники по этнической истории России" 
                            type = "Контрольная работа" 
                            subject = "Геодезия"
                            cost = "5000"/>
                </div>
            </div>
            <img className="delete" src={footer} alt="" />
        </div>
    )
}

export default Library;