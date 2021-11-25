import {getCode} from "./util";
import {tags} from "./util";

const intSnippet = [
    {
      title: "Convert Numbers to Ordinals",
      desc: "Kotlin Extension Function to convert integers to their ordinal forms..",
      tag: tags.int,
      code: "fun Int.toOrdinal()",
      sourceCode: getCode(`
      fun Int.toOrdinal():String{
        var suffix = when (this % 10) {
            1 -> "st"
            2 -> "nd"
            3 -> "rd"
            else -> "th"
        }
        if (this % 100 in 11..13) suffix = "th"
        
        return "$this$suffix"
    }
     `),
      usage: getCode(`
      val a = 122.toOrdinal()
print(a) // Output: 122nd
      `),
    },

    {
        title: "Convert pixels to dp & dp to pixels",
        desc: "Kotlin Int Extensions to convert pixels to dp and dp to pixels",
        tag: tags.int,
        code: "val Int.pxTodp",
        sourceCode: getCode(`
    val Int.pxTodp: Int
    get() = (this / Resources.getSystem().displayMetrics.density).toInt()
    
    val Int.dpTopx: Int
    get() = (this * Resources.getSystem().displayMetrics.density).toInt()
       `),
        usage: getCode(`
        val a = 122.toOrdinal()
  print(a) // Output: 122nd
        `),
      },
  ];

  export default intSnippet