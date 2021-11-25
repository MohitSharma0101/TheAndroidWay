import {getCode} from "./util";
import {tags} from "./util";


 const textViewSnippet = [
    {
      title: "Make Links Clickable in a TextView",
      desc: "TextView Extension Function to highlights all Links in text.",
      tag: tags.textView,
      code: "fun TextView.highlightsLinks()",
      sourceCode: getCode(`
      fun TextView.highlightsLinks(){
        Linkify.addLinks(this,Linkify.WEB_URLS)
      }
     `),
      usage: getCode(`
      val tv  = findViewById<TextView>(R.id.textView)
      tv.highlightsLinks()
      `),
    },
  ];

  export default textViewSnippet