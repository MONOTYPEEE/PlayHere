import { makeStyles, shorthands } from "@fluentui/react-components";

export const MarkdownStyle = makeStyles({
    body:{
        display:"flex",
        ...shorthands.gap('16px'),
        flexDirection: 'column',
        ...shorthands.margin('0px'),
        fontSize: '16px'
    }
})