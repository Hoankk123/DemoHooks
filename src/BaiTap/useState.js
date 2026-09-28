import React, { useState } from 'react';

// 1. Counter Component
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Count: {count}</h2>
    </div>
  );
}

// 2. Controlled Input Field
export function ControlledInput() {
  const [text, setText] = useState('');
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <h2>Input text: {text}</h2>
    </div>
  );
}

// 3. Toggle Visibility
export function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <h2>Toggle me!</h2>}
    </div>
  );
}

// 4. Color Switcher
export function ColorSwitcher() {
  const [color, setColor] = useState('white');
  return (
    <div>
      <select onChange={(e) => setColor(e.target.value)} value={color}>
        <option value="white">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div style={{ backgroundColor: color, width: '100px', height: '100px', marginTop: '10px' }}></div>
    </div>
  );
}

// 5. Search Filter
export function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
  const filteredItems = items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
      <ul>
        {filteredItems.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

// 6. Drag and Drop List
export function DragAndDrop() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => setDraggingItem(index);
  
  const handleDragEnter = (index) => {
    if (draggingItem === null) return;
    const newItems = [...items];
    const draggedItemContent = newItems.splice(draggingItem, 1)[0];
    newItems.splice(index, 0, draggedItemContent);
    setDraggingItem(index);
    setItems(newItems);
  };

  const handleDragEnd = () => setDraggingItem(null);

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragEnd={handleDragEnd}
          style={{ padding: '10px', border: '1px solid #ccc', margin: '5px', cursor: 'grab', opacity: draggingItem === index ? 0.5 : 1 }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}