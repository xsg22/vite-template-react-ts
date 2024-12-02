import * as React from 'react';
import { createRoot, Root} from "react-dom/client";
import './index.css';
import TodoList from './components/TodoList';

const container: HTMLElement | null = document.getElementById('app');
const root: Root = createRoot(container);
root.render(<TodoList />);