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
        ...shorthands.gap('12px')
    }
})