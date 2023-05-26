async function gql(query: string, variables: Object) {
  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return data.json();
}

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "toff26") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    dateAdded
                }
            }
        }
    }
`;

const GET_POST = `
query GetPost($slug: String!) {
    post(slug: $slug, hostname: "toff26.hashnode.dev") {
        title
        content
        dateAdded
    }
}
`;

export async function getPosts(page: number) {
  const result = await gql(GET_USER_ARTICLES, { page });
  return result;
}

export async function getPost(slug: string) {
  const result = await gql(GET_POST, { slug });
  return result;
}
