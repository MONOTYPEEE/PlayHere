import { Dialog, DialogTrigger, Button, DialogSurface, DialogBody, DialogTitle, DialogContent, Field, Input, DialogActions, Card } from "@fluentui/react-components"
import { Add24Filled, Search24Regular } from "@fluentui/react-icons"
import VideoThumb from "../VideoThumb"
import { Dispatch, SetStateAction, useState } from "react"
import { QueueAddDialogStyle } from "./style"

export default function QueueAddDialog(){
    const style = QueueAddDialogStyle()

    const [SearchResult, setSearchResult] = useState<YoutubeResponse>()
    const [SearchBar,setSearchBar] = useState<string>('')
    const [Selected, setSelected] = useState<number>();

    function YouTubeSearch(){
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&q=${SearchBar}&type=video&key=${process.env.NEXT_PUBLIC_GOOGLE}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setSearchResult(data)
        })
    }

    function EnterKeyHandler(event:React.KeyboardEvent<HTMLInputElement>){
        if(event.key === 'Enter'){
            YouTubeSearch()
        }
    }

    return(
        <Dialog>
            <DialogTrigger disableButtonEnhancement>
                <Button icon={<Add24Filled/>} appearance="primary">추가</Button>
            </DialogTrigger>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle >
                        대기열에 추가
                    </DialogTitle>

                    <DialogContent>
                        <Field label='검색어' size="large">
                            <Input value={SearchBar} onChange={(e)=>setSearchBar(e.target.value)} onKeyDown={EnterKeyHandler} type="search" contentAfter={<Search24Regular/>}/>
                        </Field>
                        <div className={style.list}>
                            {SearchResult && SearchResult.items.map((d, i)=>{
                                return(
                                    <Card selected={i===Selected} onClick={()=>setSelected(i)} appearance="subtle" key={d.id.videoId}>
                                        <VideoThumb data={d}/>
                                    </Card>
                                )
                            })}
                        </div>
                    </DialogContent>

                    <DialogActions>
                        <DialogTrigger disableButtonEnhancement>
                            <Button>
                                닫기
                            </Button>
                        </DialogTrigger>
                    </DialogActions>

                </DialogBody>
            </DialogSurface>
        </Dialog>
    )
}