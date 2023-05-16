import logo from "./../imgs/logo.svg";
import header_styles from "../css/header.module.css";
import "./../App.css";
import Modal from "../partials/modal";
import Autorisation from "./autorisation";
import RegModal from "./regmodal";
import { useState } from "react";

const Logo = () =>{
    return(
        <div className={header_styles.logo}>
                    <a href="./../../public/index.html">
                        <img src = {logo} alt="AcademWork logo" className={header_styles.logo_img} />
                    </a>
                    <div className={header_styles.line}></div>
                    <span className={header_styles.logo_text}>
                        Сервис помощи студентам
                    </span>
                </div>
    )
}

const Navbar = (props) =>{
    let arr = [];

   for (let i = 1; i < props.arr.length; i++) {
      arr.push(props.arr[i]);
   }

   let arrTag = arr.map(function(element, index) {
      return <div className={header_styles.nav_item}>{element}</div>;
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

    let navItemsNotAuth = ["Услуги", "О проекте", "Эксперты", "Отзывы", "FAQ", "Поддержка"];
    let navItemsAuth = ["Главная", "Библиотека заказв", "Рейтинг исполнителей", "FAQ", "Помощь"];

    return(
    <div className={header_styles.background}>
       
        <div className={header_styles.container}>
            <header className={header_styles.header}>
                <Logo/>
                <Navbar arr = {navItemsNotAuth} />
                <Btn txt = "Личный кабинет"/>
            </header>
        </div>
        
    </div> 
    );
}

export default Header;
export let modalActive, setModalActive;