import {getCode} from "./util";
import {tags} from "./util";

const activitySnippets = [
    {
      title: "Disable Screen Capture in Android",
      desc: "Activity Extension Function to disable all screen capturing",
      tag: tags.activity,
      code: "fun Activity.disableScreenCapture()",
      sourceCode: getCode(`
      // Call it before setContentView()
      fun Activity.disableScreenCapture(){
        window.setFlags(WindowManager.LayoutParams.FLAG_SECURE,
                        WindowManager.LayoutParams.FLAG_SECURE)
      }
     `),
      usage: getCode(`
      //Inside onCreate before setContentView()
      this.disableScreenCapture()
      `),
    },
    {
      title: "Open App In Play Store",
      desc: "Open any app in the play store with their package name. Generally used for rating and stuff.",
      tag: tags.activity,
      code: "fun Activity.openAppInGooglePlay(packageName:String)",
      sourceCode: getCode(`
      fun Activity.openAppInGooglePlay(packageName:String){
        val intent = Intent(Intent.ACTION_VIEW).apply {
          data = Uri.parse(
           "https://play.google.com/store/apps/details?id=$packageName")
          setPackage("com.android.vending")
        }
        startActivity(intent)
     }
     `),
      usage: getCode(`
      //Inside Activity
      val packageName = this.getPackageName() // Get application package name
      this.openAppInGooglePlay(packageName)
      `),
    },
  ];

  export default activitySnippets;