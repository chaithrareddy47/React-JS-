// pure react

/*
 * step - 1 :- include 2 react links 
react and react dom
*/


// before jsx we used to write code like pure react will be like this
const App = () => {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    return (
        React.createElement("div", {},
            React.createElement('p', {}, `This is time ${time}`))

        )

    

};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
