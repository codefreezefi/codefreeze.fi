import { render } from "preact";
import { useEffect, useState } from 'preact/hooks'
import './status.css'

const Status = () => {
    const [media, setMedia] = useState<{filename: string, content: string}[]>([])
    useEffect(() => {
        fetch('/status.json')
        .then<{
            "author": {"name":string, // "Nat 🚂"
            "twitter":string, //"@AnnNat"
        },
            "date": string, // "2017-01-19 14:10:01 +0000",
            "media": string[], // ["C2igvXvXEAMr6vJ.jpeg"]
            "content": string, // "<p>Winter Dreams come true\n<a href=\"https://codefreeze.fi/\">Codefreeze</a>\n#Finland #lapland #codefreeze</p>\n"
        }[]>(res=>res.json())
        .then(status => {
            const allMedia = status.map(({media, content}) => (media??[]).map(m => ({filename: m, content}))).flat().filter(m => !m.filename.endsWith('mp4')).sort(() => Math.random() > 0.5 ? 1:-1).slice(0,10)
            setMedia(allMedia)
        })
        .catch(console.error)
    }, [])
    return <div class='gallery'>{media.map(m => <Media filename={m.filename} content={m.content}/>)}</div>
}

const Media = ({filename, content}: {filename: string, content: string}) => <div
style={{
    backgroundImage: `url(/images/status/thumb-500-${filename})`
}}>
    <div
class="content"
dangerouslySetInnerHTML={{
    __html: content,
}}
/>
</div>

render(<Status />, document.getElementById("status") as HTMLDivElement);

