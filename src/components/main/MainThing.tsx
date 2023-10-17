import style from "./MainThing.module.scss";
import roud from '../../assets/images/Roud.png';
import {motion} from 'framer-motion';

export const MainThing = () => {

    const rightAnimation = {
        hidden: {
            x: 300,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2},
        })
    }
    const leftAnimation = {
        hidden: {
            x: -300,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2},
        })
    }

    return (
        <div className={style.Wrapper} id={'Main'}>
            <div className={style.Container}>
                <motion.div className={style.LeftBlock}
                            initial="hidden"
                            whileInView="visible"
                >
                    <motion.h1
                        variants={leftAnimation}
                        custom={1}
                        className={style.Title}>Поможем принять для вас денежные средства в РФ. Для ИП и ФИЗ ЛИЦ
                    </motion.h1>
                    <motion.p variants={leftAnimation}
                              custom={2}
                              className={style.Desc}>Google Admob, Youtube Adsense, Amazon и многие другие
                    </motion.p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className={`${style.RightBlock} `}>
                    <motion.img variants={rightAnimation}
                                custom={1}
                        // transition={{type: "spring", stiffness: 80}}
                                src={roud} alt=""/>
                    <motion.p variants={rightAnimation}
                              custom={2}
                        // transition={{type: "spring", stiffness: 800}}
                              className={style.Desc}>Принимайте деньги от Google AdSense на
                        Российские
                        реквизиты
                    </motion.p>
                </motion.div>
            </div>
        </div>
    )
}