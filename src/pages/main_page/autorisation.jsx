import styles from "../../css/autorisation.module.css";
import vk_icon from "../../imgs/icons/vk.svg";
import fb_icon from "../../imgs/icons/fb.svg";
import google_icon from "../../imgs/icons/google.svg";
import yandex_icon from "../../imgs/icons/yandex.svg";

const Autorisation = ({onRegClick}) => {
    
    const RegActive = (state) =>{
        onRegClick(state);
    }
    return (
        <div>
            <div className={styles.window}>
                <div className={styles.main_txt}>
                    Войти в личный кабинет
                </div>
                <div className={styles.inputs}>
                    <input type="text" placeholder="Логин" className={styles.input} />
                </div>
                <div className={styles.inputs}>
                    <input type="password" placeholder="Пароль" className={styles.input} />
                </div>
                <div className={styles.div_btn}>
                    <button className={styles.btn}>
                        <span className={styles.btn_text}>Войти</span>
                    </button>
                </div>
                <div className={styles.forget}>
                    Забыли логин или пароль?
                </div>
                <div className={styles.social}>
                    <div className={styles.social_txt}>
                        Авторизуйтесь через соцсети:
                    </div>
                    <div className={styles.social_icons}>
                        <img src={vk_icon} alt="vk" />
                        <img src={fb_icon} alt="fb" className={styles.icon} />
                        <img src={google_icon} alt="google" className={styles.icon} />
                        <img src={yandex_icon} alt="yandex" className={styles.icon} />
                    </div>
                </div>
                <div className={styles.orange_box} onClick={()=>RegActive(true)} >
                    <div className={styles.txt1}>
                        Еще не зарегестрированы?
                    </div>
                    <div className={styles.txt2}>
                        Регистрация
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Autorisation;