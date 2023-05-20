import style from "../../css/orangeSetTask.module.css"
import "../../App.css"
import logoYellow from "../../imgs/logoYellow.svg"
import footer from "../../imgs/FOOTER.jpg"

const OrangeSetTask = () =>{
    return(
        <div className={style.background}>
            <div className="container">
                <div className={style.container}>
                    <img className = {style.logo} src={logoYellow} alt="" />
                    <div className={style.text}>
                        <h2 className={style.h2}>Нужна помощь с решением нестандартной задачи?</h2>
                        <h4 className={style.h4}>Просто оставьте заявку и наши специалисты Вам помогут</h4>
                    </div>
                    <button className={style.btn}>
                        Оставить заявку
                    </button>
                </div>
                <img className="delete" src={footer} alt="" />
            </div>
        </div>
    )
}

export default OrangeSetTask;