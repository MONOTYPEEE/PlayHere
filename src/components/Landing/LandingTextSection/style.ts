import { makeStyles, tokens } from "@fluentui/react-components";

export const LandingTextSectionStyle = makeStyles({
    Section1:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: tokens.spacingHorizontalXXXL,
        height: '100vh'
    },
    Section1Inner:{
        display:'flex',
        flexDirection:'column'
    }
})