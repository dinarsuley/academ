import style from "../css/lastOrders_main.module.css"
import "../App.css"
import lastOrders_img from "../imgs/lastOrders_img.svg"
import Arrow from "../imgs/Arrow.svg"
import alarm from "../imgs/icons/alarm.svg"

const Order = (props) =>{
    return(
        <div className={style.order}>
            <div className={style.order_info}>
                <div className={style.order_header}>{props.header}</div>
                <div className={style.order_description}>{props.description}</div>
            </div>
            <div className={style.order_conditions}>
                <div className={style.order_cost}>
                    {props.cost}
                </div>
                <div className={style.order_deadline}>
                    <img src={alarm} alt="" />
                    <span className={style.order_deadline_txt}>{props.deadline}</span>
                </div>
            </div>
            <div className={style.order_line}></div>
        </div>
    )
}

const LastOrders = () =>{
    return(
        <div className="container">
            <div className={style.content_main}>
                <div className={style.content_text}>
                    <h6 className={style.text_chooseTask}>Выберите задание</h6>
                    <div className={style.line}></div>
                    <h1 className={style.text_head}>Последние заказы</h1>
                    <div className={style.text_txt}>
                        На нашей платформе размещено огромное количество заказов, которые выполняют специалисты самого высокого уровня. При этом цены значительно ниже, так как сотрудничество проходит без посредников.
                    </div>
                    <div className={style.text_img}>
                        <img src={lastOrders_img} alt="" />
                    </div>
                </div>

                <div className={style.content_orders}>
                    <div className={style.orders_box}>
                        <Order header = "Решить 3 задачи" description = "Решение задач, обоснование проектных решений, геодезия" cost = "5 000 руб." deadline = "Срок сдачи: 23 ноября, 21:00" />
                        <Order header = "Сделать блок-схему" description = "Другое, программирование" cost = "3 250 руб." deadline = "Срок сдачи: 24 ноября, 11:00" />
                        <Order header = "Следовать методическим рекомендациям" description = "Курсовая, экономика" cost = "25 000 руб." deadline = "Срок сдачи: 27 ноября, 07:00" />
                        <Order header = "Решить задачи и ответить на вопросы" description = "Решение задач, гражданский процесс" cost = "7 700 руб." deadline = "Срок сдачи: 30 ноября, 23:00" />
                    </div>
                    <div className={style.orders_scroller_container}>
                        <div className={style.arrowUp}>
                            <img src={Arrow} alt="" />
                        </div>
                        <div className={style.arrowDown}>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>

                    <div className={style.orders_all}>
                        <div className={style.orders_all_txt}>
                            Все заказы
                            <div className={style.orders_line}></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default LastOrders;