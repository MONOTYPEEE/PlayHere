import { Title1, Title2, Title3, makeStyles } from "@fluentui/react-components";
import { HeadingComponent } from "react-markdown/lib/ast-to-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface MarkdownType{
    body: string;
}

export default function Markdown({body}:MarkdownType){


    return(
        <ReactMarkdown components={{
            h1: Title1 as HeadingComponent,
            h2: Title2 as HeadingComponent,
            h3: Title3 as HeadingComponent,
        }}>
            {body}
        </ReactMarkdown>
    )
}