import style from "../../css/lastOrders_main.module.css"
import "../../App.css"
import lastOrders_img from "../../imgs/lastOrders_img.svg"
import Arrow from "../../imgs/Arrow.svg"
import alarm from "../../imgs/icons/alarm.svg"
import { useState, useEffect } from "react"

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
    const [last_orders, setLastOrders] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8080/orders/get_lasts',{
            method: "GET"
        })
           .then((res) => res.json())
           .then((data) => {
              console.log(data);
              var orders = [];
              var orders_raw = data['orders'];
              for(var i = 0;i < orders_raw.length && i < 4; i++){
                var date = new Date(orders_raw[i]['deadline']); 
                orders.push(<Order  header = {orders_raw[i]['header']}
                                    description = {orders_raw[i]['type_of_work']+", "+orders_raw[i]['subject']} 
                                    cost = {orders_raw[i]['budget'] + " руб."}
                                    deadline = {date.getHours()+":"+date.getMinutes()+"     "+date.getDay()+"."+date.getMonth()+"."+date.getFullYear()} />
                            )
              };
              setLastOrders(orders);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

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
                        {last_orders}
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