import logo from "./../imgs/logo.svg";
import header_styles from "../css/header.module.css";
import "./../App.css";
import Modal from "../partials/modal";
import Autorisation from "../pages/main_page/autorisation";
import RegModal from "./regmodal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Logo = () =>{
    return(
        <div className={header_styles.logo}>
                    <Link to="/">
                        <img src = {logo} alt="AcademWork logo" className={header_styles.logo_img} />
                    </Link>
                    <div className={header_styles.line}></div>
                    <span className={header_styles.logo_text}>
                        Сервис помощи студентам
                    </span>
                </div>
    )
}

const Navbar = (props) =>{
    let arr = [];

   for (let i = 0; i < props.arr.length; i++) {
      arr.push(props.arr[i]);
   }

   let arrTag = arr.map(function(element, index) {
      return <div>{element}</div>;
   });

    return(
    <div className={header_styles.menu}>
        <nav className={header_styles.nav} title="">
            {arrTag}
        </nav>
    </div>
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

    return(
        <div>
            <Modal active = {modalAuthActive} setActive={setModalAuthActive}>
                <Autorisation onRegClick={changeRegModalState}/>
            </Modal>
            <Modal active = {modalReghActive} setActive={setModalRegActive}>
                <RegModal onLoginClick={changeLogModalState}/>
            </Modal>
            <div className={header_styles.btn_container}>
                    <button  onClick={()=>setModalAuthActive(true)}>
                        {props.txt}
                    </button>
            </div> 
        </div>
    )
}

const Header = ()=>{
    const [isAuth, setAuth] = useState(false);
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

    return(
    <div className={header_styles.background}>
       
        <div className={header_styles.container}>
            <header className={header_styles.header}>
                <Logo/>
                <Navbar arr = {navItemsAuth} />
                <Btn txt = "Личный кабинет"/>
            </header>
        </div>
        
    </div> 
    );
}

export default Header;
export let modalActive, setModalActive;