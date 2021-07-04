import React, { useState } from 'react';
import './SearchPage.css';
import useAutoFill from '../helpers/useAutoFill';
import List from './List';
import { default as defaultDictionary } from '../dictionary';

const TAB_KEY_CODE = 9;

const SearchPage = () => {
  const [input, setInput] = useState('');
  const [dictionary, setDictionary] = useState<Set<string>>(new Set(defaultDictionary)); // use set to ensure entries are unique

  const autoFillWord = useAutoFill({
    input,
    dictionary: [...dictionary].reverse(), // Reverse to return recent input first
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDictionary(new Set(dictionary).add(input.trim())); // remove possible trailing space at end
    setInput('');
  };

  const handleKeydDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === TAB_KEY_CODE && autoFillWord) {
      e.preventDefault();
      setInput(x => `${x}${autoFillWord} `);
    }
  };

  // calculate input font width, to get auto fill margin-left
  const measureTextWidth = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context) {
      context.font = getComputedStyle(document.body).font;
      return context.measureText(input).width;
    }
    return 0;
  };

  return (
    <div className="search-page">
      <h1 className="title">AUTO FILL INPUT</h1>
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <input
            className="input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeydDown}
            type="text"
            placeholder="Type something here..."
            required
          />
          {
            Boolean(autoFillWord) &&
            <span
              className="auto-fill-hint"
              style={{
                marginLeft: `${
                  measureTextWidth() +
                  (autoFillWord && autoFillWord[0] === ' ' ? 4 : 0)
                  /* 5 is for the length of space as needed in next word prediction */
                }px`,
              }}
            >
              {autoFillWord}
            </span>
          }
        </div>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
      <List items={[...dictionary].reverse()} />
    </div>
  );
};

export default SearchPage;
