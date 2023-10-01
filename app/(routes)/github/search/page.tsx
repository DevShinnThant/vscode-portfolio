import React from "react";
import CardGrid from "../components/CardGrid";

export const metadata = {
  title: "Search",
  description: "Search for repositories in the github account.",
};

async function fetchRepo(slug: string) {
  const response = await fetch(
    `https://api.github.com/repos/ShinnTNT/${slug}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { q: searchValue } = searchParams;

  const repo = await fetchRepo(searchValue);

  return (
    <main className="w-full">
      <CardGrid>{/* <Card/> */}</CardGrid>
    </main>
  );
}
