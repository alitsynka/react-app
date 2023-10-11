import {Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import style from './SideBarMenu.module.scss';
import {ReactComponent as MenuIcon} from "../../assets/images/charm_menu-hamburger.svg";
import React, {useState} from "react";
import {links} from '../../constants/constant'

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const SideBarMenu = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [bool, setBool] = useState<true | false>(true);

    const list = (anchor: Anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            className={style.List}
        >
            <List>
                {links.map((link, index) => {

                    return (
                        <ListItem key={link.title} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={link.title} className={style.Link}/>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
            <Divider/>
        </Box>
    );
    const toggleDrawer = (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {

            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
            setBool(!bool)
            setState({...state, [anchor]: open});
        };


    return (
        <Box className={style.HumburgerMenu}>
            <Button onClick={toggleDrawer('right', bool)}>
                <MenuIcon/>
            </Button>
            <Drawer
                className={style.WrapperSideBar}
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </Box>
    )
}