const parent = React.createElement('div', {
    id: "parent"
}, [
    React.createElement('div', {}, [
        React.createElement("h1", {}, "this is h1 for child 1"),
        React.createElement("h2", {}, "this is h2 for child 1")
    ]),
    React.createElement('div', {}, [
        React.createElement("h1", {}, "this is h1 for child2 "),
        React.createElement("h2", {}, "this is h2 for child 2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
