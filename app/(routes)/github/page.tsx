import Card from "./components/Card";
import CardGrid from "./components/CardGrid";

async function getGitRepos() {
  const response = await fetch(
    "https://api.github.com/users/ShinnTNT/repos?type=all",
    {
      next: {
        revalidate: 86400,
        // Revalidate once a day
      },
    }
  );

  return response.json();
}

export default async function Github() {
  const data = await getGitRepos();

  return (
    <main className="w-full">
      <CardGrid>
        {data.map((item: any) => (
          <Card
            key={item.id}
            name={item.name}
            description={item.description}
            repoType={item.visibility}
            star={item.stargazers_count}
            tech={item.language}
            watcher={item.watchers}
          />
        ))}
      </CardGrid>
    </main>
  );
}
