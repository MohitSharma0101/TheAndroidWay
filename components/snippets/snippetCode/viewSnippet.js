import {getCode} from "./util";
import {tags} from "./util";

const viewSnippets = [
    {
      title: "Remove the View",
      desc: "Change the visibilty of the View to View.GONE",
      code: "fun View.gone()",
      tag: tags.view,
      sourceCode: getCode(`
      fun View.gone() {
        this.visibility = View.GONE
      }
    `),
      usage: getCode(` myView.gone()`),
    },
    {
      title: "Show the View",
      code: "fun View.visible()",
      desc: "Change the visibilty of the View to View.VISIBLE",
      tag: tags.view,
      sourceCode: getCode(`
        fun View.visible() {
          this.visibility = View.VISIBLE
        }
      `),
      usage: getCode(`myView.visible()`),
    },
    {
      title: "Resize the View",
      desc: "Extension method to resize View with height & width.",
      code: "fun View.resize(width: Int, height: Int)",
      tag: tags.view,
      sourceCode: getCode(`
      fun View.resize(width: Int, height: Int) {
          val lp = this.layoutParams
          lp?.let {
              lp.width = width
              lp.height = height
              layoutParams = lp
          }
      }
      `),
      usage: getCode(`
      myView.resize(50 , 100)
       `),
    },
  ];


  export default viewSnippets