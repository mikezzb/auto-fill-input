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

  insert(path) { // path是一个包含一个或数个node的路径，insert用以创建一条路径
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
    for (const str of word) { // 逐层查看父节点下面有没有当前值，如果有就更新currNode为子节点，否则word不在树中
      currNode = currNode.children.get(str);
      if (!currNode) {
        return false;
      }
    }
    // 如果有word在词库中，找一条downward path（也就是自动联想的字串）然后返回
    if (this.isWordNode) { // 如果是word的node，只需返回第一个word
      const next = currNode.children.keys().next().value;
      return next;
    }
    // 如果是charNode便要找到leaf （ended）以返回完整联想字串
    return this.getDownwardPath(currNode, '');
  }

  getDownwardPath(root, currStr) {
    if (root.ended) {
      return currStr;
    }
    for (const val of root.children.keys()) {
      if (root.children.has(val)) {
        const next = root.children.get(val);
        return this.getDownwardPath(next, currStr + val);
      }
    }
  }
}

export default Trie;
