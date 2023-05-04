import Body_style from "../css/body_info_1.module.css"
import Modal from "./modal.jsx";
import "../App.css"
import main_img from "../imgs/main-img1.svg";
import { useState } from "react";

const PopUpFeedback = () =>{
    
    return(
        <div>
            <h1>popup</h1>
        </div>
    )
}

const Body_info_1 = () =>{
    const[popupActive, setPopupActive] = useState(false);

    const[modalExpertActive, setModalExpertActive] = useState(false);
    const[modalPushActive, setModalPushActive] = useState(false);
    return(
        <div>
            <Modal active = {modalExpertActive} setActive={setModalExpertActive}>
                EXPERT
            </Modal>
            <Modal active = {modalPushActive} setActive={setModalPushActive}>
                PUSH
            </Modal>
            <div className="container">
            <div className={Body_style.container}>
                <div className={Body_style.main}>
                    <div className={Body_style.main_info}>
                        <div className={Body_style.name}>
                            AcademWork
                        </div>
                        <div className={Body_style.subname}>
                            Профессиональная помощь студентам
                        </div>
                        <div className={Body_style.main_txt}>
                            Платформа, объединяющая студентов, котрым нужна помощь и экспертов, готовых ее предоставить
                        </div>
                        <div>
                            <button className={Body_style.btn1} onClick={()=>setModalPushActive(true)}>
                                Разместить задание
                            </button>
                            <button className={Body_style.btn2} onClick={()=>setModalExpertActive(true)}>
                                Стать экспертом
                            </button>
                        </div>
                    </div>
                    <div className={Body_style.main_img}>
                        <img src={main_img} alt="main img 1" className={Body_style.main_img} />
                    </div>
                </div>
                <div className={Body_style.stats}>
                    <div className={Body_style.stats_info}>
                        <div className={Body_style.stats_num}>
                            51 045
                        </div>
                        <div className={Body_style.stats_text}>
                            <div className={Body_style.stats_txt}>
                                студентов
                            </div>
                            <div className={Body_style.stats_subtxt}>
                                зарегистрировались на нашем сервисе
                            </div>
                        </div>
                    </div>
                    
                    <div className={Body_style.stats_info}>
                        <div className={Body_style.stats_num}>
                            23 182
                        </div>
                        <div className={Body_style.stats_text}>
                            <div className={Body_style.stats_txt}>
                                экспертов
                            </div>
                            <div className={Body_style.stats_subtxt}>
                                готовы помочь студентам
                            </div>
                        </div>
                    </div>

                    <div className={Body_style.stats_info}>
                        <div className={Body_style.stats_num}>
                            84 123
                        </div>
                        <div className={Body_style.stats_text}>
                            <div className={Body_style.stats_txt}>
                                заданий
                            </div>
                            <div className={Body_style.stats_subtxt}>
                                размещено и выполнено за текущий год
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Body_info_1;