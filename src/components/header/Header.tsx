import style from './Header.module.scss';
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import {SideBarMenu} from "../sidebar/SideBarMenu";
import {links} from '../../constants/constant'

export const Header = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.LogoBlock}>
                    <Logo/>
                    <p>Cashbridge</p>
                </div>
                <ul className={style.NavBlock}>
                    {
                        links.map((link: any) => {
                            return (
                                <li><a href="#" className={style.Link}>{link.title}</a></li>
                            )
                        })
                    }
                </ul>
                <button className={style.BtnConnect}>Связаться</button>
                <SideBarMenu/>
            </div>
        </div>
    )
}