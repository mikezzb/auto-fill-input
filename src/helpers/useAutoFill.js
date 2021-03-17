import { useEffect, useRef } from 'react';
import Trie from './Trie';

const useAutoFill = ({
  input,
  dictionary,
}) => {
  const { current } = useRef({
    wordTrie: new Trie([], true),
    charTrie: new Trie([], false),
  });

  useEffect(() => {
    if (dictionary && dictionary.length) {
      current.wordTrie = new Trie(dictionary, true);
      current.charTrie = new Trie(dictionary, false);
    }
  }, [JSON.stringify(dictionary)]);
  // As dictionary is an array object, the === operator in useEffect checking will always return false

  if (dictionary && dictionary.length && input && input.length) {
    const words = input.split(' ');
    const lastWord = words[words.length - 1];
    return (words.length && words[0] && current.wordTrie.search(words)) || (lastWord && current.charTrie.search(lastWord));
  }

  return '';
};

export default useAutoFill;
