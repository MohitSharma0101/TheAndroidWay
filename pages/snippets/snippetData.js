
const tags = {
   viewExtension : "View Extension"
}

const snippets = [
  {
    code: "View.gone()",
    title: "Remove the View",
    desc: "change the visibilty of the View to View.GONE",
    tag: tags.viewExtension,
  },
  {
    code: "View.visible()",
    title: "Show the View",
    desc: "change the visibilty of the View to View.VISIBLE",
    tag: tags.viewExtension,
  },
  {
    code: "View.resize(width: Int, height: Int)",
    title: "Resize the View",
    desc: " Extension method to resize View with height & width.",
    tag: tags.viewExtension,
  },
  {
    code: "null",
    title: "View Extentions",
    desc: "List of all View Extentions",
    tag: tags.viewExtension,
    
  },
];

export default function getAllSnippets(){
    return snippets
}
