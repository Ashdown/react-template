import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    links: {
        display: 'flex',
    },
    homeLink: {
        backgroundColor: '#fff',
        color: '#000',
        textAlign: 'center',
        padding: 8,
        fontSize: 16,
        lineHeight: '20px',
        fontWeight: 'bold',
        '&:hover':{
            textDecoration: 'none',
        }
    },
    list: {
        padding: 0,
        margin: 0,
        display: 'flex'
    },
    item: {
        listStyleType: 'none',
    },
    navLink: {
        display: 'block',
        color: 'white',
        padding: 8,
        fontSize: 16,
        lineHeight: '20px',
        '&:hover':{
            textDecoration: 'none',
        }
    },
    '@media (min-width: 1024px)': {
        homeLink: {
            fontSize: 20,
            lineHeight: '48px'
        },
        navLink:{
            fontSize: 20,
            lineHeight: '48px'
        }
    }
})

const LINK_DATA = [
    {
        label: 'People: Vanilla React',
        to: '/people'
    },
    {
        label: 'Animals: Redux',
        to: '/animals'
    },
    {
        label: 'Tools: TODO',
        to: '/tools'
    }
]

const Links = () => {
    const classes = useStyles()
    return (
        <div className={classes.links}>
            <Link className={classes.homeLink} to="/">
                React Template App
            </Link>
            <ul className={classes.list}>
                { LINK_DATA.map( (data, index) =>
                    <li key={index} className={classes.item}>
                        <Link className={classes.navLink} to={data.to}>
                            {data.label}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Links