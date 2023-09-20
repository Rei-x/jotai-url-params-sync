import React from "react";
import "@picocss/pico/css/pico.min.css";
import Link from "next/link";
import { Documents, documentsAtom } from "./dokumenty";
import { ExtractAtomValue } from "jotai";

const DocumentsLink = ({
  document,
  children,
}: {
  document: Documents;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={{
        pathname: "/dokumenty",
        hash: new URLSearchParams({
          filter: JSON.stringify([document] satisfies ExtractAtomValue<
            typeof documentsAtom
          >),
        }).toString(),
      }}
    >
      {children}
    </Link>
  );
};

export default function Home() {
  return (
    <main
      className="container"
      style={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DocumentsLink document="faktury-zakupowe">
        Faktury zakupowe
      </DocumentsLink>
      <DocumentsLink document="faktury-sprzedazowe">
        Faktury sprzedażowe
      </DocumentsLink>
      <DocumentsLink document="ewidencja-godzin">
        Ewidencja godzin
      </DocumentsLink>
    </main>
  );
}
