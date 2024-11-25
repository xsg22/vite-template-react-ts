import * as React from 'react';
import { createRoot, Root} from "react-dom/client";

const container: HTMLElement | null = document.getElementById('app');
const root: Root = createRoot(container);
root.render(<h1>Hello World</h1>);