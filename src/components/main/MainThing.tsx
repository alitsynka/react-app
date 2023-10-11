import style from "./MainThing.module.scss";
import roud from '../../assets/images/Roud.png';

export const MainThing = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.LeftBlock}>
                    <h1 className={style.Title}>Поможем принять для вас денежные средства в РФ. Для ИП и ФИЗ ЛИЦ</h1>
                    <p className={style.Desc}>Google Admob, Youtube Adsense, Amazon и многие другие</p>
                </div>
                <div className={style.RightBlock}>
                    <img src={roud} alt=""/>
                    <p className={style.Desc}>Принимайте деньги от Google AdSense на Российские
                        реквизиты
                    </p>
                </div>

            </div>
        </div>
    )
}