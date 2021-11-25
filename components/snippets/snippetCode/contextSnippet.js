import {getCode} from "./util";
import {tags} from "./util";

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

  
  export default contextSnippets