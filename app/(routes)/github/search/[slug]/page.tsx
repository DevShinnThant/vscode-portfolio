import React from "react";
import CardGrid from "../../components/CardGrid";

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
  params: { slug },
}: {
  params: { slug: string };
}) {
  const repo = await fetchRepo(slug);

  console.log(repo, "repo");

  return (
    <main className="w-full">
      <CardGrid>{/* <Card/> */}</CardGrid>
    </main>
  );
}
