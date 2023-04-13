import style from "../css/advantage.module.css";

const Adv = (props) =>{
    return(
        <div className={style.adv}>
            <div className={style.num}>
                <div className={style.num_back}>
                    <div className={style.num_front}>
                        <div className={style.num_txt}>
                            {props.num}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.txt}>
                <div className={style.headtxt}>
                    {props.text}
                </div>
                <div className={style.subtxt}>
                    {props.subtext}
                </div>
            </div>
        </div>
    )
}

export default Adv;