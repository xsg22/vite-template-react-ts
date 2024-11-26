import * as React from 'react';
import { createRoot, Root} from "react-dom/client";
import TodoList from "./TodoList";

const container: HTMLElement | null = document.getElementById('app');
const root: Root = createRoot(container);
root.render(<TodoList />);