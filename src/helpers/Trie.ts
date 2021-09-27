import TrieNode from './TrieNode';

export class Trie {
  isWordNode: boolean;

  root: TrieNode;

  constructor(dictionary: string[], isWordNode: boolean) {
    this.isWordNode = isWordNode;
    this.root = new TrieNode('');
    if (dictionary.length) {
      dictionary.forEach(str => {
        const words = str.split(' ');
        if (isWordNode) {
          this.insert(words); // node is a word, a path consists one or more words nodes
        }
        else {
          words.forEach(word => this.insert(word)); // node is a char, a path consits one or more char nodes.
        }
      });
    }
  }

  /* path contains one or more nodes, insert is to create a new path */
  insert(path: string[] | string) {
    let currNode = this.root;
    for (const nodeValue of path) {
      const node = currNode.children.get(nodeValue) || new TrieNode(nodeValue);
      currNode.children.set(nodeValue, node);
      currNode = node;
    }
    currNode.ended = true;
  }

  search(word: string[] | string): string {
    let currNode: TrieNode | undefined = this.root;
    /* Check if children node has current value, if has, update the child to be currNode, else DNE */
    for (const str of word) {
      currNode = currNode.children.get(str);
      if (!currNode) {
        return '';
      }
    }
    /* If has the word in dictionary, find downward path and return */
    if (this.isWordNode) {
      const next = currNode.children.keys().next().value;
      return next;
    }
    /* If the node is char, then find till leaf to return complete string */
    return this.getDownwardPath(currNode, '') || '';
  }

  getDownwardPath(root: TrieNode | null, currStr: string): string | undefined {
    if (!root || root.ended) {
      return currStr;
    }
    for (const val of root.children.keys()) {
      if (root.children.has(val)) {
        const next = root.children.get(val);
        return this.getDownwardPath(next || null, currStr + val);
      }
    }
  }
}

export default Trie;
