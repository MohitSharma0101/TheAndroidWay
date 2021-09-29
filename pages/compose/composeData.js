const tags = {
  interactive: "Interactive",
  button: "Button",
  progressIndicator: "Progress Indicator",
};

const types = {
    gif : "gif",
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
 
];

export default function getAllComposeUI() {
  return data;
}
