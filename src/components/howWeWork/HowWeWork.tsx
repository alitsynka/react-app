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

export const HowWeWork = () => {

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div className={style.Wrapper}>
            <div className={style.WrBlock}>
                <div className={style.Container}>
                    <h2 className={style.Title}>Как <span>мы</span> работаем</h2>
                    <div className={style.StepsBlock}>
                        <div className={style.Step}>
                            <Step1/>
                            <h3 className={style.TitleStep}>Безопасно</h3>
                            <p>Заключаете договор и подключаете ключи</p>
                        </div>
                        <div className={style.Step}>
                            <Step2/>
                            <h3 className={style.TitleStep}>Стабильно</h3>
                            <p>Мы получаем выплату на несколько компаний в европе, что гарантирует поступление
                                платежа</p>
                        </div>
                        <div className={style.Step}>
                            <Step3/>
                            <h3 className={style.TitleStep}>Удобно</h3>
                            <p>Заказываете выплату любым удобным для себя спобосом</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.WrBlock}>
                <div className={style.Container}>
                    <h2 className={style.Title}>Из каких сетей принимаем деньги</h2>
                    <div className={style.NetWorks}>
                        <div className={style.NetWork}>
                            <Admob className={style.AdmobSvg}/>
                            <p>Admob</p>
                        </div>
                        <div className={style.NetWork}>
                            <Adsense className={style.AdsensSvg}/>
                            <p>AdSense</p>
                        </div>
                        <div className={style.NetWork}>
                            <Amazon className={style.AmazonSvg}/>
                            <p>Amazon</p>
                        </div>
                        <div className={style.NetWork}>
                            <p>Прочие по запросу</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.WrBlock}>
                <div className={style.Container}>
                    <h2 className={style.Title}>Условия сотрудничества</h2>
                    <div className={style.Conditions}>
                        <p className={style.ConditionsTitle}>Мы предлагаем гибкие условия сотрудничества начиная от 7%
                            от
                            суммы поступления</p>
                    </div>
                </div>
            </div>
            <div className={style.WrBlock}>
                <div className={style.Container}>
                    <h2 className={style.Title}>Способы оплаты</h2>
                    <div className={style.PaymentMethods}>
                        <div className={style.PaymentMethod}>
                            <p>Счет ИП /<br/> Юридического лица</p>
                        </div>
                        <div className={style.PaymentMethod}>
                            <p>Перевод на карту Тинькофф или Сбербанк</p>
                        </div>
                        <div className={style.PaymentMethod}>
                            <p>Криптовалюта</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.WrBlock}>
                <div className={style.Container}>
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
                </div>
            </div>
            <div className={style.WrBlock}>
                <div className={style.Container}>
                    <div className={style.ContactBlock}>
                        <p className={style.ConnectTitle}>Оставьте свой email для связи.</p>
                        <input type="text" className={style.Input} placeholder={'Введите свой email'}/>
                        <button className={style.Btn}>Связаться со мной</button>
                    </div>
                </div>

            </div>
        </div>
    )
}