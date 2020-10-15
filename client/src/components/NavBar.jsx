import React from 'react'
import Links from './Links'
import {makeStyles} from '@material-ui/styles';

const MOBILE_HEIGHT = 36
const DESKTOP_HEIGHT = 64

const useStyles = makeStyles({
    navBar: {
        height: MOBILE_HEIGHT,
        color: '#fff',
    },
    container:{
        height: MOBILE_HEIGHT,
        backgroundColor: '#000',
        top: 0,
        left: 0,
        right: 0,
        position: 'fixed',
    },
    content:{
        width: 1200,
        margin: '0 auto'
    },
    '@media (min-width: 1024px)': {
        navBar: {
            height: DESKTOP_HEIGHT,
        },
        container: {
            height: DESKTOP_HEIGHT,
        }
    }
})

const NavBar = () => {
    const classes = useStyles()
    return (
        <div className={classes.navBar}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <Links/>
                </div>
            </div>
        </div>
    )
}

export default NavBar