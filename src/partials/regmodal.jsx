import { useState } from 'react'
import '../css/regmodal.module.css'
import style from'../css/regmodal.module.css'
import expert from '../imgs/icons/expert.svg'
import order from '../imgs/icons/order.svg'
import vk_icon from "../imgs/icons/vk.svg";
import fb_icon from "../imgs/icons/fb.svg";
import google_icon from "../imgs/icons/google.svg";
import yandex_icon from "../imgs/icons/yandex.svg";

const InputItem = (props)=>{
    return(
        <div>
            <input type={props.type} placeholder={props.placeholder} className={style.input} />
        </div>
    )
}

const RegModal = ({onLoginClick}) =>{

    const LogActive = (state) =>{
        onLoginClick(state);
    }
    
    const[regAsExpert, setRegAsExpert] = useState(false);
    if(regAsExpert){
        var regAs = "Регистрация как исполнитель";
    } 
    else{
        regAs = "Регистрация как заказчик";
    } 
    
    return(
        <div>
            <div className={style.regwindow}>
                <div className={style.regText}>
                    {regAs}
                </div>
                <div className={style.mbody}>
                    <div className={style.regAsBtns}>
                        <div className={style.btnimg}>
                            <img src={expert} alt="Registration as expert" onClick={()=>setRegAsExpert(true)} className={regAsExpert? style.btnImgActive : style.btnImgInactive}/>
                            <div className={style.btnimgtxt}>
                                Я-исполнитель
                            </div>
                        </div>
                        <div className={style.btnimg}>
                            <img src={order} alt="Registration as order" onClick={()=>setRegAsExpert(false)} className={regAsExpert? style.btnImgInactive : style.btnImgActive}/>
                            <div className={style.btnimgtxt}>
                                Я-заказчик
                            </div>
                        </div>
                    </div>
                    <div className={style.inputs}>
                        <InputItem type="text" placeholder="Имя" className={style.input}/>
                        <InputItem type="text" placeholder="Логин" className={style.input}/>
                        <InputItem type="text" placeholder="Электронная почта" className={style.input}/>
                        <InputItem type="password" placeholder="Пароль" className={style.input}/>
                        <InputItem type="password" placeholder="Пароль повторно" className={style.input}/>

                        <div className={style.btn}>
                            <button className={style.regBtn}>
                                Регистрация
                            </button>
                        </div>

                        <div className={style.checkbox}>
                            <input type="checkbox" name="agreement" id="agreement" />
                            <label htmlFor="agreement"> Я принимаю  </label>
                            <label htmlFor="agreement"> пользовательское соглашение </label>
                        </div>
                    </div>
                </div>
                <div className={style.social}>
                    <div className={style.socialTxt}>Авторизуйтесь через соцсети:</div>
                    <div className={style.icons}>
                        <img src={vk_icon} alt="vk" className={style.icon} />
                        <img src={fb_icon} alt="fb" className={style.icon} />
                        <img src={google_icon} alt="google" className={style.icon} />
                        <img src={yandex_icon} alt="yandex" className={style.icon} />
                    </div>
                </div>
                <div className={style.orangeBox} onClick={()=>LogActive(true)}>
                    <div className={style.txt1}>
                        Уже зарегистрированы?
                    </div>
                    <div className={style.txt2}>
                        Войти
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegModal;