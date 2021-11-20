import styles from "../../styles/Snippets.module.scss";
import { inUrlFormat } from "../util";
import Image from "next/image";
import Link from "next/link";
import getAllSnippets from "../../pages/snippets/snippetData";
import { getContextSnippets } from "../../pages/snippets/snippetData";
import Head from "next/head";
import MDX from "../MDX";
import PageTitle from "../PageTitle";
import Code from "../Code";
import { useState } from "react";
import { useHighlightSyntax } from "../util";

const test = {
  title: "Get City Name",
  desc: "Get the City Name from the latitude and longitude.",
  sourceCode: (
    <Code>{`fun Context.getCityName(latitude: Double, longitude: Double): String {
      val geoCoder = Geocoder(this, Locale.getDefault())
      val address = geoCoder.getFromLocation(latitude, longitude, 1)
      return address[0].locality
  }`}</Code>
  ),
  usage: (
    <Code>{` //Inside Activity
  this.getCityName(latitude, longitude)

  //Insdie Fragment
  requiredContext().getCityName(latitude, longitude)
  `}</Code>
  ),
};

function Snippet({ title, desc, sourceCode, usage ,tag , code}) {
  const [showDetails, setshowDetails] = useState(true);
  const [showUsage, setshowUsage] = useState(false);
  const hide = { display: "none" };
  const selected = { backgroundColor: "#090B0C" };

  function ShowCode() {
    useHighlightSyntax();
    if (showUsage) return usage;
    else return sourceCode;
  }

  return (
    <div className={styles.snippet}>
      <div
        className={styles.head}
        onClick={() => {
          setshowDetails(!showDetails);
        }}
      >
        <div id={inUrlFormat(title)} className={styles.title}>{title}</div>
        <Image
          className={showDetails ? styles.rotateUp : styles.rotateDown}
          src="/icons/backArrow.svg"
          width="30"
          height="30"
          alt=""
        />
      </div>

      <div className={styles.details} style={showDetails ? {} : hide}>
        <p>{desc}</p>
        <div className={styles.codeToggle}>
          <p
            style={showUsage ? {} : selected}
            onClick={() => setshowUsage(false)}
          >
            Source Code💻
          </p>
          <p
            style={showUsage ? selected : {}}
            onClick={() => setshowUsage(true)}
          >
            Usage🎯
          </p>
        </div>
        <ShowCode />
      </div>
    </div>
  );
}

export default function Snippets({ tag }) {
  return (
    <div>
      <Head>
        <title>{tag}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.headSection}>
      <PageTitle
          title="Snippets"
          color="#30DC80"
          icon="snippet"
          desc="Short solutions to trival probelms in Android Dev."
          backLink="snippets"
        />
      </div>
      <div className={styles.content}>
        <Index title={tag} />
        <div className={styles.contentMdx}>
          {/* <MDX>{children}</MDX> */}
          {getAllSnippets().map((item) => (
            <Snippet key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Index({ title }) {
  return (
    <div className={styles.index}>
      <h1>Index📜</h1>
      {getAllSnippets().map((item) => (
        <IndexLink key={item.title} title={item.title} />
      ))}
    </div>
  );
}

function IndexLink({ title }) {
  return (
    <Link href={`#${inUrlFormat(title)}`} passHref>
      <a>
        <div>
        <Image
        className={styles.rotateRight}
          src="/icons/backArrow.svg"
          width="24"
          height="24"
          alt=""
        />
        </div>
        <p>{title}</p>
      </a>
    </Link>
  );
}

function getIndex(title) {
  return getAllSnippets().filter((snippet) => {
    return snippet.tag.toLowerCase().includes(title) && snippet.code != "";
  });
}
