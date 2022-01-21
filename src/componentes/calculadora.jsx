import React, {useState} from 'react'
import '../componentes/calculadora.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculator () {
    const [num,setNum]=useState (0);
    const [oldnum, setOldNum]=useState(0);
    const [operator, setOperator]=useState();

    function inputNum (e) {
        var input=e.target.value;
        if (num===0){
            setNum (input);
        }
        else {
        setNum (num+input);
        }
    }
    function clear () {
        setNum(0)
    }

    function porcentagem () {
        setNum(num/100);
    }

    function sinal () {
        setNum(-num);
    }

    function operatorHandler(e){
        var operatorInput=e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate (){
        if (operator==="/"){
            setNum(parseFloat(oldnum)/parseFloat(num));
        }
        else if (operator==="X"){
            setNum(parseFloat(oldnum)*parseFloat(num));
        }
        if (operator==="-"){
            setNum(parseFloat(oldnum)-parseFloat(num));
        }
        if (operator==="+"){
            setNum(parseFloat(oldnum)+parseFloat(num));
        }
        console.log(oldnum);
        console.log(num);
        console.log(operator);
    }

    return (
        <div className='todo'>
            <div className='style'>
                <Box m= {5}/>
                <Container maxWidth="xs">
                    <div className='fundo'>
                        <h1>{num}</h1>

                        <button onClick={clear}>AC</button>
                        <button onClick={sinal}>+/-</button>
                        <button onClick={porcentagem}>%</button>
                        <button onClick={operatorHandler} value={"/"}className='color1'>/</button>
                        <button onClick={inputNum} value={7}>7</button>
                        <button onClick={inputNum} value={8}>8</button>
                        <button onClick={inputNum} value={9}>9</button>
                        <button onClick={operatorHandler} value={"X"}className='color1'>x</button>
                        <button onClick={inputNum} value={4}>4</button>
                        <button onClick={inputNum} value={5}>5</button>
                        <button onClick={inputNum} value={6}>6</button>
                        <button onClick={operatorHandler} value={"-"}className='color1'>-</button>
                        <button onClick={inputNum} value={1}>1</button>
                        <button onClick={inputNum} value={2}>2</button>
                        <button onClick={inputNum} value={3}>3</button>
                        <button onClick={operatorHandler} value={"+"}className='color1'>+</button>
                        <button onClick={inputNum} value={0}>0</button>
                        <button onClick={inputNum} value={0}>00</button>
                        <button onClick={inputNum} value={"."}>.</button>
                        <button onClick={calculate}className='color2'>=</button>

                    </div>
                </Container>
            </div>
        </div>
    );
}