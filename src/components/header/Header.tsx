import style from './Header.module.scss';
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import {SideBarMenu} from "../sidebar/SideBarMenu";
import {links} from '../../constants/constant'
import {Link} from "react-scroll";

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
                                <li>
                                    <Link to={link.path}
                                          spy={true}
                                          smooth={true}
                                          hashSpy={true}
                                          offset={-200}
                                          duration={500}
                                          delay={100}
                                          className={style.Link}>
                                        {link.title}
                                    </Link></li>
                            )
                        })
                    }
                </ul>
                    <Link to={"form"}
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={-250}
                          duration={700}
                          delay={100}
                          className={style.BtnConnect}>
                        Связаться
                    </Link>
                <SideBarMenu/>
            </div>
        </div>
    )
}