export function getTopThreePost(tag, notInclude) {
  return getAllBlogs().filter(
    (category) => category.tags.includes(tag) && category.id != notInclude
  );
}

export function getBlog(id){
  return getAllBlogs().find(
    (blog) => blog.id.includes(id)
  )
}

const tags = {
  composeUi: "Compose UI",
  canvas: "Canvas",
  kotlin: "Kotlin",
  customUi: "Custom UI",
  animation: "Animation",
}


export default function getAllBlogs() {
  return [
    {
      title: "Emoji Slider in Jetpack Compose using Canvas API",
      id: "emoji-slider-in-jetpack-compose",
      tags: [tags.composeUi, tags.canvas ],
      date: "26 Sept 2021",
      content:
        "Learn to use Canvas API to create custom UI elements and managing states in Jetpack Compose",
    },
    {
      title: "Instagram Double-Tap to Like Animation in Jetpack Compose",
      id: "instagram-double-tap-to-like-animation-in-jetpack-compose",
      tags: [tags.composeUi, tags.animation ],
      date: "26 Sept 2021",
      content: "Learn to use simple animations in Jetpack Compose",
    },
    {
      title: "How to create a Pulse Loading animation in Jetpack Compose",
      id: "how-to-create-a-pulse-loading-animation-in-jetpack-compose",
      tags: [tags.composeUi, tags.animation ],
      date: "26 Sept 2021",
      content: "Learn to use simple animations in jetpack compose",
    },
    
  ];
}
