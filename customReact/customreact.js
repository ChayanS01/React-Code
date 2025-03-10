// building our own custom react lib
// how react sees the elements whenever we try to render elements in function

// function customRender(reactElement, container){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//     container.appendChild(domElement)

//}
    
// Another way to code the attributes with for loop

function customRender(reactElement, container){
        const domElement = document.createElement(reactElement.type)
        domElement.innerHTML = reactElement.children
        for(const prop in reactElement.props){
            if(prop === 'children') continue;
            domElement.setAttribute(prop, reactElement.props[prop])
        }
        container.appendChild(domElement)
        
    }

const reactElement = {
    type: 'a',   // checks what type of html element is it
    props: {     // props itself is a object 
        href: "https://google.com", 
        target: "_blank"
    },
    children: "Click it to visit Google website"
}
const mainContainer = document.getElementById("root")
customRender(reactElement, mainContainer)