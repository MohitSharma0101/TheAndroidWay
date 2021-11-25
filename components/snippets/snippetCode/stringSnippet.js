import {getCode} from "./util";
import {tags} from "./util";

const stringSnippet = [
    {
      title: "Check for Valid Web URL",
      desc: "String Extension Function to check if a URL is valid or not.",
      tag: tags.string,
      code: "fun String.isValidURL()",
      sourceCode: getCode(`
      fun String.isValidURL() : Boolean {
        val pattern = Patterns.WEB_URL
        val isUrl = pattern.matcher(this).matches()
        return this.isNotEmpty() && isUrl
      }
      
      //OR 
      
      fun String.isValidUrl() = Patterns.WEB_URL.matcher(this).matches()
     `),
      usage: getCode(`
      val url  = "www.google.com"
      url.isValidURL()
      `),
    },

    {
        title: "Check for a Valid Email address",
        desc: "String Extension Function to check if an Email address is valid or not.",
        tag: tags.string,
        code: "fun String.isValidEmail()",
        sourceCode: getCode(`
        fun String.isValidEmail() : Boolean{
            val pattern = Patterns.EMAIL_ADDRESS
            val isEmail = pattern.matcher(this).matches()
            return this.isNotEmpty() && isEmail
          }
       `),
        usage: getCode(`
        val email  = "example@gmail.com"
        email.isValidEmail()
        `),
      },

      {
        title: "Password Strength Checker",
        desc: "Function to check if a given string can be a strong password or not.",
        tag: tags.string,
        code: "fun String.isPasswordStrong()",
        sourceCode: getCode(`
        fun String.isPasswordStrong(): Boolean {
            val passwordREGEX = Pattern.compile("^" +
                    "(?=.*[0-9])" +         //at least 1 digit
                    "(?=.*[a-z])" +         //at least 1 lower case letter
                    "(?=.*[A-Z])" +         //at least 1 upper case letter
                    "(?=.*[a-zA-Z])" +      //any letter
                    "(?=.*[@#$%^&+=])" +    //at least 1 special character
                    "(?=\\S+$)" +           //no white spaces
                    ".{8,}" +               //at least 8 characters
                    "$");
            return passwordREGEX.matcher(this).matches()
        }
       `),
        usage: getCode(`
        val pass  = "hulk@123"
        pass.isPasswordStrong()
        `),
      },
  ];

  export default stringSnippet