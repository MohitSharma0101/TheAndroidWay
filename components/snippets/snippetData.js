import Code from "../Code";
import textViewSnippets from "./snippetCode/textViewSnippet"
import stringSnippets from "./snippetCode/stringSnippet"
import utilitySnippets from "./snippetCode/utilitySnippet"
import activitySnippets from "./snippetCode/activitySnippet"
import viewSnippets from "./snippetCode/viewSnippet"
import contextSnippets from "./snippetCode/contextSnippet"
import intSnippets from "./snippetCode/intSnippet"



const snippets = [
  ...intSnippets,
  ...textViewSnippets,
  ...stringSnippets,
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
