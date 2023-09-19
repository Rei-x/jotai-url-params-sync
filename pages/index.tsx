import { atomWithHash } from "jotai-location";
import { useAtom } from "jotai";
import React from "react";
import "@picocss/pico/css/pico.min.css";

type Documents =
  | "faktury-zakupowe"
  | "faktury-sprzedazowe"
  | "ewidencja-godzin";

const documentsAtom = atomWithHash<Documents[]>("filter", []);

export default function Home() {
  const [documents, setDocuments] = useAtom(documentsAtom);

  const switchDocument = (document: Documents) => {
    setDocuments((docs) => {
      if (docs.includes(document)) {
        return docs.filter((doc) => doc !== document);
      } else {
        return [...docs, document];
      }
    });
  };

  return (
    <main
      className="container"
      style={{
        marginTop: "2rem",
      }}
    >
      <pre
        style={{
          padding: "1rem",
        }}
      >
        {JSON.stringify(documents)}
      </pre>
      <label>
        <input
          type="checkbox"
          checked={documents.includes("faktury-zakupowe")}
          onChange={() => {
            switchDocument("faktury-zakupowe");
          }}
        />
        Faktury zakupowe
      </label>
      <label>
        <input
          type="checkbox"
          checked={documents.includes("faktury-sprzedazowe")}
          onChange={() => {
            switchDocument("faktury-sprzedazowe");
          }}
        />
        Faktury sprzedażowe
      </label>
      <label>
        <input
          type="checkbox"
          checked={documents.includes("ewidencja-godzin")}
          onChange={(e) => {
            switchDocument("ewidencja-godzin");
          }}
        />
        Ewidencje godzin
      </label>
    </main>
  );
}
