import { makeStyles } from "@fluentui/react-components";

export const BlogPostStyle = makeStyles({
    root:{
        width: "350px",
        '@media screen and (max-width: 720px)':{
            width:'100%'
        }
    }
});