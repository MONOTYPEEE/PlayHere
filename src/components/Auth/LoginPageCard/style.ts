import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const LoginPageCardStyle = makeStyles({
    flex:{
        display: 'flex',
        flexDirection:'column',
        ...shorthands.gap(tokens.spacingVerticalL),
    },
    width:{
        width: '350px',
        '@media screen and (max-width: 720px)':{
            width:'95%'
        }
    },
    hzFlex:{
        display:'flex',
        flexWrap:'nowrap',
        '& > button':{
            width:'100%',
        }
    }
})