import style from "./HowWeWork.module.scss";
import {ReactComponent as Step1} from '../../assets/images/firstStep.svg';
import {ReactComponent as Step2} from '../../assets/images/secondStep.svg';
import {ReactComponent as Step3} from '../../assets/images/thirdStep.svg';
import {ReactComponent as Admob} from '../../assets/images/admob.svg';
import {ReactComponent as Adsense} from '../../assets/images/adsense.svg';
import {ReactComponent as Amazon} from '../../assets/images/amazon.svg';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from "react";
import {motion} from 'framer-motion';


const textAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.15},
    })
}
const shadowAnimation = {
    hidden: {
        y: 0,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.9,
            delay: custom * 0.25},
    })
}

export const HowWeWork = () => {

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    const stepsAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                // duration: 0.4,
                delay: custom * 0.2,
                ease: "easeInOut"
            },
        })
    }
    const whileHover = {
        scale: 1.1,
        boxShadow: '4px 4px 30px 0px rgba(0, 0, 0, 0.4)',
        transition: {
            ease: "easeIn"
        }
    }
    return (
        <div className={style.Wrapper}>
            <div className={style.WrBlock}>
                <div className={style.Container} id={'HowWeWork'}>
                    <motion.h2 className={style.Title}
                               initial="hidden"
                               whileInView="visible"
                               viewport={{amount: 0.2}}
                               variants={textAnimation}
                               custom={1}>
                        Как <span>мы</span> работаем
                    </motion.h2>
                    <motion.div className={style.StepsBlock}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{amount: 0.1}}>
                        <motion.div variants={stepsAnimation} custom={2}
                                    className={style.Step}>
                            <Step1/>
                            <h3 className={style.TitleStep}>Безопасно</h3>
                            <p>Заключаете договор и подключаете ключи</p>
                        </motion.div>
                        <motion.div variants={stepsAnimation} custom={2}
                                    className={style.Step}>
                            <Step2/>
                            <h3 className={style.TitleStep}>Стабильно</h3>
                            <p>Мы получаем выплату на несколько компаний в европе, что гарантирует поступление
                                платежа</p>
                        </motion.div>
                        <motion.div variants={stepsAnimation} custom={2}
                                    className={style.Step}>
                            <Step3/>
                            <h3 className={style.TitleStep}>Удобно</h3>
                            <p>Заказываете выплату любым удобным для себя спобосом</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <div className={style.WrBlock}>
                <div className={style.Container}>
                    <motion.h2 variants={textAnimation}
                               id={"WhereAccept"}
                               initial="hidden"
                               whileInView="visible"
                               viewport={{amount: 0.2}}
                               custom={1}
                               className={style.Title}
                    >
                        Из каких сетей принимаем деньги
                    </motion.h2>
                    <motion.div initial="hidden"
                                whileInView="visible"
                                viewport={{amount: 0.2}}
                                className={style.NetWorks}>
                        <motion.div className={style.NetWork}
                                    variants={shadowAnimation}
                                    whileHover={whileHover}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={1.5}>
                            <Admob className={style.AdmobSvg}/>
                            <p>Admob</p>
                        </motion.div>
                        <motion.div className={style.NetWork}
                                    whileHover={whileHover}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={shadowAnimation}
                                    custom={2.5}>
                            <Adsense className={style.AdsensSvg}/>
                            <p>AdSense</p>
                        </motion.div>
                        <motion.div className={style.NetWork}
                                    whileHover={whileHover}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={shadowAnimation}
                                    custom={3.5}>
                            <Amazon className={style.AmazonSvg}/>
                            <p>Amazon</p>
                        </motion.div>
                        <motion.div className={style.NetWork}
                                    whileHover={whileHover}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={shadowAnimation} custom={4.5}>
                            <p>Прочие по запросу</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <div className={style.WrBlock}>
                <motion.div variants={textAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.2}}
                            custom={1}
                            className={style.Container}>
                    <h2 className={style.Title}>Условия сотрудничества</h2>
                    <div className={style.Conditions}>
                        <p className={style.ConditionsTitle}>Мы предлагаем гибкие условия сотрудничества начиная от 7%
                            от
                            суммы поступления</p>
                    </div>
                </motion.div>
            </div>
            <div className={style.WrBlock}>
                <div className={style.Container} id={'HowSent'}>
                    <motion.h2 variants={textAnimation}
                               initial="hidden"
                               whileInView="visible"
                               viewport={{amount: 0.2}}
                               custom={1}
                               className={style.Title}>Способы оплаты
                    </motion.h2>
                    <div className={style.PaymentMethods}>
                        <motion.div className={style.PaymentMethod}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={textAnimation} custom={1}
                        >
                            <p>Счет ИП /<br/> Юридического лица</p>
                        </motion.div>
                        <motion.div className={style.PaymentMethod}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={textAnimation} custom={1}
                        >
                            <p>Перевод на карту Тинькофф или Сбербанк</p>
                        </motion.div>
                        <motion.div className={style.PaymentMethod}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={textAnimation} custom={1}
                        >
                            <p>Криптовалюта</p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className={style.WrBlock}>
                <motion.div className={style.Container}
                            variants={stepsAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.2}}
                            custom={1}
                >
                    <h2 className={style.Title}>FAQ</h2>

                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                               className={style.Accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"

                        >
                            <Typography sx={{width: '33%', flexShrink: 0}} className={style.AccordionTitle}>
                                Какая комиссия за вывод?
                            </Typography>
                            {/*<Typography sx={{color: 'text.secondary'}}>I am an accordion</Typography>*/}
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={style.DescAccordion}>
                                Комиссия от 7%, все зависит от суммы поступления.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                               className={style.Accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{width: '33%', flexShrink: 0}}
                                        className={style.AccordionTitle}>Какая минимальная сумма выплаты?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={style.DescAccordion}>
                                Минимальная сумма выплаты составляет $100. Эта сумма может измениться в будущем.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                               className={style.Accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{width: '33%', flexShrink: 0}} className={style.AccordionTitle}>
                                Какие способы вывода возможны?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={style.DescAccordion}>
                                Доступны различные способы вывода, например на Счет ИП/Юр. лица в РФ; перевод на карту
                                Тинькофф/Сбербанк; также доступны выплаты в криптовалюте.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
                               className={style.Accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{width: '33%', flexShrink: 0}} className={style.AccordionTitle}>Клиентам из
                                каких стран вы можете помочь с выводом?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={style.DescAccordion}>
                                Мы помогаем клиентам из всех стран.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </motion.div>
            </div>
            <div className={style.WrBlock}>
                <motion.div className={style.Container}
                            variants={stepsAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.2}}
                            custom={1}
                            id={'form'}
                >
                    <div className={style.ContactBlock}>
                        <p className={style.ConnectTitle}>Оставьте свой email для связи.</p>
                        <input type="text" className={style.Input} placeholder={'Введите свой email'}/>
                        <button className={style.Btn}>Связаться со мной</button>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}