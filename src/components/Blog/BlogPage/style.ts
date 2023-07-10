import { makeStyles } from "@fluentui/react-components";

export const BlogPageStyle = makeStyles({
    root:{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '75px'
    },
    clild:{
        maxWidth: '640px',
        width: '-webkit-fill-available',
        display: 'flex',
        flexDirection: 'column',
    },
});