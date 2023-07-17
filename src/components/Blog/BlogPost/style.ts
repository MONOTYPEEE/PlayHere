import { makeStyles, tokens } from "@fluentui/react-components";

export const BlogPostStyle = makeStyles({
    root:{
        width: "350px",
        rowGap: tokens.spacingVerticalXXS,
        '@media screen and (max-width: 720px)':{
            width:'100%'
        }
    }
});