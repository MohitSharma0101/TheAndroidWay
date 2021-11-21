import Snippets from "../../components/snippets/Snippets";
import { getAllTags } from "../../components/snippets/snippetData";

export const meta = {
  title: "context",
  desc: "A list of all Context Extensions",
  author: "Mohit Sharma",
  tag:"context"
};

export default function Snip(props) {
  return <Snippets tag={props.tag} />;
}

export async function getStaticProps(context) {
  return {
    props: {tag: context.params.tag}, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {

  const paths = getAllTags().map((tag) => {
    return {
      params: {
        tag
      }
    }
  });

  return {
    paths,
    fallback: false,
  };
}
