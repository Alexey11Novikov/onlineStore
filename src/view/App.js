import React from 'react';
import Table from './Table';


function App() {
    return <Table />;
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);