import {shuffle} from "../../components/util";

export const tags = {
   viewExtension : "View Extension",
   contextExtension : "Context Extension"
}

const snippets = [
  {
    code: "fun Context.getDrawableById(id: Int)",
    title: "Get Drawable by Id",
    desc: "Get the drawable resources by id.",
    tag: tags.contextExtension,
  },
  {
    code: "",
    title: "View Extentions",
    desc: "List of all View Extentions",
    tag: tags.viewExtension,
  },
  {
    code: "fun View.gone()",
    title: "Remove the View",
    desc: "Change the visibilty of the View to View.GONE",
    tag: tags.viewExtension,
  },
  {
    code: "fun View.visible()",
    title: "Show the View",
    desc: "Change the visibilty of the View to View.VISIBLE",
    tag: tags.viewExtension,
  },
  {
    code: "fun View.resize(width: Int, height: Int)",
    title: "Resize the View",
    desc: "Extension method to resize View with height & width.",
    tag: tags.viewExtension,
  },
  {
    code: "",
    title: "Context Extentions",
    desc: "List of all Context Extentions",
    tag: tags.contextExtension,
  },
  {
    code: "fun Context.copyToClipboard(text: String)",
    title: "Copy Text to Clipboard",
    desc: "Copy any String to clipboard.",
    tag: tags.contextExtension,
  },
  {
    code: "fun Context.setWallpaper(bitmap:Bitmap)",
    title: "Set Device Wallpaper",
    desc: "Set the device wallpaper programmatically.",
    tag: tags.contextExtension,
  },
  
];

export default function getAllSnippets(){
    return snippets.reverse()
}
