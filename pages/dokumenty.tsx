import { atomWithHash } from "jotai-location";
import { useAtom, useAtomValue } from "jotai";
import React from "react";
import "@picocss/pico/css/pico.min.css";
import Link from "next/link";

export type Documents =
  | "faktury-zakupowe"
  | "faktury-sprzedazowe"
  | "ewidencja-godzin";

export const documentsAtom = atomWithHash<Documents[]>("filter", [], {
  setHash: "replaceState",
});

const DocumentCheckbox: React.FC<{
  document: Documents;
}> = ({ document }) => {
  const [documents, setDocuments] = useAtom(documentsAtom);

  return (
    <label>
      <input
        type="checkbox"
        checked={documents.includes(document)}
        onChange={() => {
          setDocuments((docs) => {
            if (docs.includes(document)) {
              return docs.filter((doc) => doc !== document);
            } else {
              return [...docs, document];
            }
          });
        }}
      />
      {document}
    </label>
  );
};

export default function Home() {
  const documents = useAtomValue(documentsAtom);

  return (
    <main
      className="container"
      style={{
        marginTop: "2rem",
      }}
    >
      <Link href="/">Wróć</Link>
      <pre
        style={{
          padding: "1rem",
        }}
      >
        {JSON.stringify(documents)}
      </pre>
      <DocumentCheckbox document="faktury-zakupowe" />
      <DocumentCheckbox document="faktury-sprzedazowe" />
      <DocumentCheckbox document="ewidencja-godzin" />
    </main>
  );
}
