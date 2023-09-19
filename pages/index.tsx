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
    <main className="container">
      <pre>{JSON.stringify(documents)}</pre>
      <label>
        Faktury zakupowe
        <input
          type="checkbox"
          name="faktury"
          checked={documents.includes("faktury-zakupowe")}
          onChange={() => {
            switchDocument("faktury-zakupowe");
          }}
        />
      </label>
      <label>
        Faktury sprzedażowe
        <input
          type="checkbox"
          name="faktury-sprzedazowe"
          checked={documents.includes("faktury-sprzedazowe")}
          onChange={() => {
            switchDocument("faktury-sprzedazowe");
          }}
        />
      </label>
      <label>
        Ewidencje godzin
        <input
          type="checkbox"
          name="ewidencje-godzin"
          checked={documents.includes("ewidencja-godzin")}
          onChange={(e) => {
            switchDocument("ewidencja-godzin");
          }}
        />
      </label>
    </main>
  );
}
