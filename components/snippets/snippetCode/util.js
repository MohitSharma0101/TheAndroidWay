import Code from "../../Code";

export const tags = {
    view: "View",
    context: "Context",
    activity: "Activity",
    utility: "Utility",
    string: "String",
    textView : "TextView",
    int : "Int",
  };
  
  export function getAllTags() {
    const allTags = Object.keys(tags).map((tag) =>
      tag.toLowerCase().trim().replace(/ /g, "-")
    );
    return allTags;
  }
  
  export function getCode(code) {
    return <Code>{code.trim()}</Code>;
  }

 