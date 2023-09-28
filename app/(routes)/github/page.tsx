async function getGitRepos() {
  const response = await fetch("https://api.github.com/users/ShinnTNT/repos");
  return response.json();
}

export default async function Github() {
  const data = await getGitRepos();
  console.log(data, "data");

  return <main>GIthub Page</main>;
}
