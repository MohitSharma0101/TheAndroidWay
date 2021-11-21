import Code from "../Code";

export const tags = {
  view: "View",
  context: "Context",
  activity: "Activity",
  utility: "Utility",
  string: "String",
};

export function getAllTags() {
  const allTags = Object.keys(tags).map((tag) =>
    tag.toLowerCase().trim().replace(/ /g, "-")
  );
  return allTags;
}

function getCode(code) {
  return <Code>{code.trim()}</Code>;
}

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
];

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
];

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
    desc: "Open any app in the play store with their package name. Generally, This method is used to open the app itself in Play Store for rating and stuff.",
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

const contextSnippets = [
  {
    title: "Vibrate Android Programmatically",
    desc: "Vibrate android phone for a specified duration.",
    tag: tags.context,
    code: "fun Context.vibrate(duration:Int = 150)",
    sourceCode: getCode(`
    fun Context.vibrate(duration:Int = 150) {
      val vibrator = getSystemService(VIBRATOR_SERVICE) as Vibrator
      if (Build.VERSION.SDK_INT >= 26) {
        vibrator.vibrate(VibrationEffect.createOneShot(duration,
                         VibrationEffect.DEFAULT_AMPLITUDE))
      } else {
        vibrator.vibrate(duration)
      }
    }
    `),
    usage: getCode(`
    //Inside Activity
    this.vibrate(200)
    
    //Insdie Fragment
    requiredContext().vibrate()
    `),
  },
  {
    title: "Get Drawable by Id ",
    desc: "Get the drawable resources by id.",
    tag: tags.context,
    code: "fun Context.getDrawableById(id: Int)",
    sourceCode: getCode(`
    fun Context.getDrawableById(id: Int) = ResourcesCompat.getDrawable(this.resources, id, null)
    `),
    usage: getCode(`
    //Inside Activity
    this.getDrawableById(R.drawable.drawableId)
    
    //Insdie Fragment
    requiredContext().getDrawableById(R.drawable.drawableId)
    `),
  },
  {
    title: "Copy Text to Clipboard",
    desc: "Copy any String to clipboard.",
    tag: tags.context,
    code: "fun Context.copyToClipboard(text: String)",
    sourceCode: getCode(`
    fun Context.copyToClipboard(text: String){
      val clipboard = getSystemService( Context.CLIPBOARD_SERVICE) as ClipboardManager
      val clip = ClipData.newPlainText("label",text)
      clipboard.setPrimaryClip(clip)
    }  
    `),
    usage: getCode(`
    //Inside Activity
    this.copyToClipboard("randomString")
    
    //Insdie Fragment
    requiredContext().copyToClipboard("randomString")
    `),
  },
  {
    title: "Set Device Wallpaper",
    desc: "Set the device wallpaper programmatically.",
    tag: tags.context,
    code: "fun Context.setWallpaper(bitmap:Bitmap)",
    sourceCode: getCode(`
    fun Context.setWallpaper(bitmap:Bitmap){
      val wallpaperManager = WallpaperManager.getInstance(this)
      wallpaperManager.setBitmap(bitmap)
    }
    `),
    usage: getCode(`
    //Inside Activity
    this.setWallpaper(bitmap)
    
    //Insdie Fragment
    requiredContext().setWallpaper(bitmap)
    `),
  },
  {
    title: "Get City Name",
    desc: "Get the City Name from the latitude and longitude.",
    tag: tags.context,
    code: "fun Context.getCityName(latitude, longitude)",
    sourceCode: getCode(`
    fun Context.getCityName(latitude: Double, longitude: Double): String {
      val geoCoder = Geocoder(this, Locale.getDefault())
      val address = geoCoder.getFromLocation(latitude, longitude, 1)
      return address[0].locality
    }
    `),
    usage: getCode(`
    //Inside Activity
    this.getCityName(latitude, longitude)
    
    //Insdie Fragment
    requiredContext().getCityName(latitude, longitude)
    `),
  },
];

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

const snippets = [
  ...stringSnippet,
  ...utilitySnippets,
  ...activitySnippets,
  ...contextSnippets,
  ...viewSnippets,
];

export function getContextSnippets() {
  return contextSnippets;
}

export default function getAllSnippets() {
  return snippets;
}
