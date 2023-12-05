import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const MarkdownStyle = makeStyles({
    body:{
        display:"flex",
        ...shorthands.gap('16px'),
        flexDirection: 'column',
        ...shorthands.margin('0px'),
        marginBottom: tokens.spacingVerticalXXXL,
        fontSize: '16px'
    }
})