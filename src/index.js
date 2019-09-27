import React,{useState} from 'react';
import ReactDOM from 'react-dom';


const Hello=(props)=>{

    return (
        <div>
            <h1>Hello {props.name}</h1>
            </div>
        )
    }
const Part1=()=>{
    const p1='fundamental of react'
    const exe1=10
    return (
        <div>
            <p>{p1} {exe1}</p>
        </div>
    )
}
const Part2=()=>{
    const p2='using props to pass data'
    const exe2=7
    return (
        <div>
            <p>{p2} {exe2}</p>
        </div>
    )
}
const Part3=()=>{
    const p3='State of a component'
    const exe3=10
    return (
        <div>
            <p>{p3} {exe3}</p>
        </div>
    )
}
const App=()=>{
    const [counter,setCounter]=useState(0)
    setTimeout(
        ()=> setCounter(2+1),
        1000)
        console.log('rendering..',counter)
    
    return( 
        <div>
            <Header course="Stack stuff"/>
             <Content part1="fundamental of React"
             exe1='10' part2="Using props to pass data"
             exe2='7' part3="State of a component"
             exe3='14' />
             Counting begins: {counter}
             <h1>Right now doing nothing</h1>
             
             <Footer/>
            </div>
        )
}
const Header=(props)=>{
    return (
        <div>
            <Hello name="Hectic"/>
            <h2>This is {props.course}</h2>
        </div>
    )
}
const Content=()=>{
    
    return(
    <div>
        <Part1/>
        <Part2/>
        <Part3/>
    </div>
    )
}
const Total=(props)=>{
    return (
        <div>
            <p>{props.exe1}+{props.exe2}+{props.exe3}=</p>
        </div>
    )
}
const Footer=()=>{
    return(
        <div>
            App made by  
            <a href="https://github.com/divyarachel"> Divya Rachel</a>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

