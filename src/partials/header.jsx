import logo from "./../imgs/logo.svg";
import userIcon from "./../imgs/icon_user.svg"
import messages from "../imgs/messages.svg";
import notifications from "../imgs/notifications.svg";
import header_styles from "../css/header.module.css";
import "./../App.css";
import Modal from "../partials/modal";
import Autorisation from "../pages/main_page/autorisation";
import RegModal from "./regmodal";
import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const Logo = (props) =>{
    return(
        <div className={header_styles.logo}>
                    <Link to="/">
                        <img src = {logo} alt="AcademWork logo" className={header_styles.logo_img} />
                    </Link>
                    <div className={clsx({[header_styles.logo_text_container]: true, [`${header_styles.logo_text_container} ${header_styles.auth}`]: props.userState})}>
                        <div className={header_styles.line}></div>
                        <span className={header_styles.logo_text}>
                            Сервис помощи студентам
                        </span>
                    </div>
                </div>
    )
}

const Navbar = (props) =>{
    let arr = [];
    //Массив линков для неавторизованных бомжей
    let navItemsNotAuth = [<Link to="/services" className={header_styles.nav_item}>Услуги</Link>, 
                        <Link to="/about" className={header_styles.nav_item}>О проекте</Link>, 
                        <Link to="/experts" className={header_styles.nav_item}>Эксперты</Link>, 
                        <Link to="/reviews" className={header_styles.nav_item}>Отзывы</Link>,
                        <Link to="/faq" className={header_styles.nav_item}>FAQ</Link>,
                        <Link to="/support" className={header_styles.nav_item}>Поддержка</Link>];
    //для авторизованных бомжей
    let navItemsAuth = [<Link to="/" className={header_styles.nav_item}>Главная</Link>, 
                        <Link to="/orders" className={header_styles.nav_item}>Библиотека заказов</Link>, 
                        <Link to="/rating" className={header_styles.nav_item}>Рейтинг исполнителей</Link>, 
                        <Link to="/faq" className={header_styles.nav_item}>FAQ</Link>,
                        <Link to="/help" className={header_styles.nav_item}>Помощь</Link>];

    if(props.userState){
        for (let i = 0; i < navItemsAuth.length; i++) {
            arr.push(navItemsAuth[i]);
         }
    }else{
        for (let i = 0; i < navItemsNotAuth.length; i++) {
            arr.push(navItemsNotAuth[i]);
         }
    }
   

   let arrTag = arr.map(function(element, index) {
      return <div className={clsx({[header_styles.nav_item_container]: true, [`${header_styles.nav_item_container} ${header_styles.auth}`]: props.userState})}>{element}</div>;
   });

    return(
        <nav className={header_styles.nav} title="">
            {arrTag}
        </nav>
    )
}

const Btn = (props) =>{
    const [modalAuthActive, setModalAuthActive] = useState(false);
    const [modalReghActive, setModalRegActive] = useState(false);

    const changeRegModalState = (state) =>{
        setModalRegActive(state);
        setModalAuthActive(!state);
    }

    const changeLogModalState = (state) =>{
        setModalRegActive(!state);
        setModalAuthActive(state);
    }

    const MyCabinet = (props)=>{
        return(
            <button className={header_styles.my_cabinet} onClick={()=>props.changeUserState(false)}>
                <img src={props.icon} alt="" />
                {props.txt}
            </button>
        )
    }

    if(!props.userState){
        return(
            <div className={header_styles.btns}>
                <Modal active = {modalAuthActive} setActive={setModalAuthActive}>
                    <Autorisation onRegClick={changeRegModalState} changeUserState = {props.changeUserState}/>
                </Modal>
                <Modal active = {modalReghActive} setActive={setModalRegActive}>
                    <RegModal onLoginClick={changeLogModalState} />
                </Modal>
                <div className={header_styles.btn_container}>
                    <button className={header_styles.btn_container_btn} onClick={()=>setModalAuthActive(true)}>
                        Личный кабинет
                   </button>
                </div> 
            </div>
        )
    }else{
        return(
            <div className={header_styles.btns}>
                <Modal active = {modalAuthActive} setActive={setModalAuthActive}>
                    <Autorisation onRegClick={changeRegModalState} changeUserState = {props.changeUserState}/>
                </Modal>
                <Modal active = {modalReghActive} setActive={setModalRegActive}>
                    <RegModal onLoginClick={changeLogModalState} />
                </Modal>
                <div className={header_styles.btn_container}>
                    <div className={header_styles.mini_imgs}>
                        <div className={header_styles.line}></div>
                        <img src={messages} alt="" />
                        <img src={notifications} alt="" />
                        <div className={header_styles.line}></div>
                        <p>
                            {props.balance}
                        </p>
                    </div>
                    <MyCabinet icon = {userIcon} txt = "Мой кабинет" changeUserState = {props.changeUserState}/>
                </div> 
            </div>
        )
    }
    
}

const Header = ()=>{
    const [isAuth, setAuth] = useState(false);
    
    const changeUserState = (state) =>{
        setAuth(state);
    }

    return(
    <div className={header_styles.background}>
       
        <div className={header_styles.container}>
            <header className={header_styles.header}>
                <Logo userState = {isAuth}/>
                <Navbar userState = {isAuth} />
                <Btn balance = "0₽" changeUserState = {changeUserState} userState = {isAuth}/>
            </header>
        </div>
        
    </div> 
    );
}

export default Header;
export let modalActive, setModalActive;