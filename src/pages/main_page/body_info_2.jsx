import Body_style from"../../css/body_info_2.module.css";
import "../../App.css";
import star from "../../imgs/star.svg";
import man from "../../imgs/eblan.svg";
import Adv from "./advantage.jsx";

const Body_info2 = () =>{
    return(
        <div className={Body_style.back}>
            <img src={man} alt="man" className={Body_style.man} />
            <div className="container">
                <div className={Body_style.main}>
                    <div className={Body_style.headtxt}>
                        <div className={Body_style.headtxt_txt}>
                            <div className={Body_style.head_adv}>
                                Преимущества
                            </div>
                            <div className={Body_style.head_line}></div>
                            <div className={Body_style.head_why}>
                                Почему именно мы
                            </div>
                        </div>
                        <div className={Body_style.headtxt_rating}>
                            <img src={star} alt="star" className={Body_style.rating_star}/><img src={star} alt="star" className={Body_style.rating_star}/><img src={star} alt="star" className={Body_style.rating_star}/><img src={star} alt="star" className={Body_style.rating_star}/><img src={star} alt="star" className={Body_style.rating_star}/>
                            <span className={Body_style.rate_num}>101 255 оценок</span><span className={Body_style.rate_num_sub}> (средняя оценка 4.9 из 5) </span>
                        </div>
                    </div>
                    <div className={Body_style.advantgs}>
                        <Adv num = "1" text = "Всегда на связи" subtext = "В случае, если автор выполнит работу не так, как следует, то мы всегда готовы разобраться в ситуации и помочь вам! Администрация сайта ответит на любые ваши вопросы в течение кратчайшего времени. Мы в сети 7 дней в неделю!"/>
                        <Adv num = "2" text = "Обширный выбор экспертов" subtext = "На нашем проекте вы встретите большое количество авторов, которые с удовольствием помогут вам с вашей работой. Стоит лишь определиться с каким из них вы будете сотрудничать." />
                        <Adv num = "3" text = "Предоставим гарантию" subtext = "При возникновении любых проблем с автором, Вы можете обратиться в тех. поддержку, где мы обязательно разберемся с проблемой и в зависимости от ситуации вернем вам деньги в размере 100%. Нам можно доверять!" />
                        <Adv num = "4" text = "Качественное выполнение" subtext = "Все наши эксперты являются полноценными специалистами в своих областях. Однако, если даже появятся какие-то недочеты по работе, Вы всегда можете рассчитывать на нас!" />
                        <Adv num = "5" text = "Низкие цены" subtext = "Наш сайт предоставляет самые дешевые цены на рынке. Зарегистрируйтесь, разместите Ваше задание и убедитесь в этом самостоятельно." />
                        <Adv num = "6" text = "Хорошие условия" subtext = "Мы предлагаем хорошие условия как для заказчика, так и для автора. Авторы получают – хорошую прибыль, большой объем клиентов, комфортный график, рейтинговую систему. Заказчики – большой выбор авторов, быстрое выполнение работы, гарантию, удобный интерфейс." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body_info2;