//context/newContext.js
import { createContext } from 'react';
let defaultValue = 'test data';
export const MessageContext = createContext(defaultValue);