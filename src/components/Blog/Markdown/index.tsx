import { Body2, Title1, Title2, Title3, makeStyles } from "@fluentui/react-components";
import { HeadingComponent } from "react-markdown/lib/ast-to-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { MarkdownStyle } from "./style";
import React from "react";

interface MarkdownType{
    body: string;
}

export default function Markdown({body}:MarkdownType){
    const style = MarkdownStyle();

    return(
        <div className={style.body}>
            <ReactMarkdown components={{
                h1: Title1 as HeadingComponent,
                h2: Title2 as HeadingComponent,
                h3: Title3 as HeadingComponent,
                p: Body2,
            }}>
                {body}
            </ReactMarkdown>
        </div>
    )
}