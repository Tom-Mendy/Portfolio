export interface PinnedItems {
  nodes: Node[];
}

export interface Node {
  name: string;
  description: string;
  primaryLanguage: { name: string };
  url: string;
  stargazerCount: number;
  repositoryTopics: { nodes: { topic: { name: string } }[] };
  owner: { login: string };
}
