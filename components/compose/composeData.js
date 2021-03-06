
export function getComposeUi(title){
  return data.find((item) =>  item.title = title )
}

const tags = {
  interactive: "Interactive",
  button: "Button",
  progressIndicator: "Progress Indicator",
  animation:"Animation"
};

const types = {
    gif : "gif",
    png:"png"
}

const data = [
  {
    title: "Emoji Slider",
    desc: "An Instagram like Emoji Slider with customization.",
    tags: [tags.interactive],
    date: '21 sept 2021',
    type: types.gif
  },
  {
    title: "Pulse Loading",
    desc: "Pulse animating infinte loading component.",
    tags: [tags.progressIndicator],
    date: '21 sept 2021',
    type: types.gif
  },
  {
    title: "Double-Tap to Like",
    desc: "Instagram's Double-Tap to Like Animation.",
    tags: [tags.animation],
    date: '21 sept 2021',
    type: types.png
  },
 
];

export default function getAllComposeUI() {
  return data;
}
