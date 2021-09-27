export default class TrieNode {
  val: string;

  children: Map<string, TrieNode>;

  ended: boolean;

  constructor(val: string) {
    this.val = val;
    this.children = new Map();
    this.ended = false;
  }
}
