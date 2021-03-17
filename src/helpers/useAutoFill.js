import { useState, useEffect } from 'react';
import Trie from './Trie';

const useAutoFill = (input, dictionary, isSentence) => {
  const [trie, setTrie] = useState(new Trie([], isSentence));

  useEffect(() => {
    if(dictionary && dictionary.length) {
      console.log(`New tree ${dictionary}`)
      setTrie(new Trie(dictionary, isSentence));
    }
  }, [JSON.stringify(dictionary)]);
  // As dictionary is a set object, the === comparison will always return false

  if(dictionary.length && input.length) {
    return trie.search(input);
  }

  return '';
}

export default useAutoFill;
