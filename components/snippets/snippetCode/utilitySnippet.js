import { getCode } from "./util";
import { tags } from "./util";

const utilitySnippets = [
  {
    title: "Get Random Color",
    desc: "Get a random color(XML & Compose) each time excluding all the white and black colors.",
    tag: tags.utility,
    code: "fun getRandomColor()",
    sourceCode: getCode(`
  // import android.graphics.Color
  fun getRandomColor() = Color.rgb((30..200).random(),
                                     (30..200).random(),
                                     (30..200).random())
  
  // import androidx.compose.ui.graphics.Color
  fun getRandomComposeColor() = Color(
                                    (30..200).random(),	
                                    (30..200).random(),
                                    (30..200).random())
     `),
    usage: getCode(`
      val view  = View()
      view.setBackground(getRandomColor())
      `),
  },
  {
    title: "Get Current Date",
    desc: "Function to get the current date in different formats.",
    tag: tags.utility,
    code: "fun getCurrentDate()",
    sourceCode: getCode(`
    import java.text.DateFormat;
    import java.util.Calendar;
        
        
    fun getCurrentDate(format:Int = DateFormat.MEDIUM): String{
        val calendar = Calendar.getInstance()
        return DateFormat.getDateInstance(format).format(calendar.getTime())
    }
       `),
    usage: getCode(`
     getCurrentDate() //output: Oct 26, 2021
     //or
     getCurrentDate(format = DateFormat.LONG) //output: October 26, 2021
     //or
     getCurrentDate(format = DateFormat.SHORT) //output: 10/26/21
        `),
  },
];

export default utilitySnippets;
