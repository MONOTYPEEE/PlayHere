import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const LoginPageCardStyle = makeStyles({
    flex:{
        display: 'flex',
        flexDirection:'column',
        ...shorthands.gap(tokens.spacingVerticalL),
        width: '350px',
    }
})