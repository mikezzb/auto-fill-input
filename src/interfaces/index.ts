import TrieNode from '../helpers/TrieNode';

interface ITrie {
  isWordNode: boolean,
  root: TrieNode,
}

interface ITrieNode {
  val: string,
  children: Map<string, ITrieNode>,
  ended: boolean,
}

export type {
  ITrie,
  ITrieNode,
};
