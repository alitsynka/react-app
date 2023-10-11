import style from './Footer.module.scss';

export const Footer = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div>
                    <div className={style.LogoBlock}>
                        <p>Cashbridge</p>
                    </div>
                    <p className={style.Contact}>ООО "Кэшбридж"</p>
                    <div>
                        <p className={style.Contact}>hello@cashbridge.io</p>
                        <p className={style.Contact}> +7980123123123</p>
                    </div>
                </div>
                <p className={style.Allrights}>All Rights Reserved @Cashbridge 2023</p>
            </div>
        </div>
    )
}