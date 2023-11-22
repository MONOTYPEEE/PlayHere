export default function UnEscapeHTML(text:string) {
    var doc = new DOMParser().parseFromString(text, "text/html")
    return doc.documentElement.textContent
}