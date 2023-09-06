import { makeStyles, shorthands } from "@fluentui/react-components"

export const VideoThumbStyle = makeStyles({
    main:{
        display:'flex',
        alignItems: 'center',
        ...shorthands.gap('12px'),
    },
    vertical:{
        display:'flex',
        flexDirection: 'column',
        ...shorthands.gap('12px'),
        width: '100%',
    },
    text:{
        width: '70%',
        textOverflow: 'ellipsis',
        overflowX: 'hidden',
        overflowY: 'hidden',
        whiteSpace:'nowrap',
        flexGrow: '1',
        flexShrink: '1',
        flexBasis: 'auto',
    }
})