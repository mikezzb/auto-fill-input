import TrieNode from './TrieNode';

export class Trie {
  constructor(dictionary, isWordNode) {
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

  insert(path) {
    let currNode = this.root;
    for (const nodeValue of path) {
      const node = currNode.children.get(nodeValue) || new TrieNode(nodeValue);
      currNode.children.set(nodeValue, node);
      currNode = node;
    }
    currNode.ended = true;
  }

  search(word) {
    let currNode = this.root;
    for (const str of word) {
      currNode = currNode.children.get(str);
      if (!currNode) {
        return false;
      }
    }
    if (this.isWordNode) {
      const next = currNode.children.keys().next().value;
      return next ? ` ${next}` : next;
    }
    return this.getDownwardPath(currNode, '');
  }

  getDownwardPath(root, currStr) {
    if (root.ended) {
      return currStr;
    }
    for (const val of root.children.keys()) {
      if (root.children.has(val)) {
        const next = root.children.get(val);
        return this.getDownwardPath(
          next,
          this.isWordNode ? `${currStr} ${val}` : currStr + val
        );
      }
    }
  }
}

export default Trie;
