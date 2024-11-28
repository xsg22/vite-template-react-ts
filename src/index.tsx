import TaskList from 'components/TaskList';
import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';
import 'index.css';

const container: HTMLElement = document.getElementById('app');
const root: Root = createRoot(container);
root.render(<TaskList />);
