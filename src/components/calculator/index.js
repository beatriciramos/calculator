import React from "react";
import "./style.css";
import Button from '@material-ui/core/Button';

class Calculator extends React.Component{
  state = { 
      pressedOperator: false,
      reseted:true,
      resultDisplay:0
  }

  handleCheckReseted = () => {
      const { reseted, resultDisplay} = this.state;
      if( reseted===true && resultDisplay===0) {
          return true;
        }
        return false;
        //retorno boleano - true or false
  }
  
  handleChangeNumber = ( value ) => {
    const { resultDisplay } = this.state;
    const newValue = (this.handleCheckReseted()===true)? parseFloat(`${resultDisplay}${value}`):`${resultDisplay}${value}`;
    
    this.setState({ resultDisplay: newValue, reseted:false, pressedOperator: false })
  } 

  handleChangeOperantion = ( value ) => { 
    const { resultDisplay, pressedOperator } = this.state;
    
    if ( this.handleCheckReseted()===true || pressedOperator===true){
        return false;
    }
    const newValue = `${resultDisplay}${value}`;  
    
    this.setState({resultDisplay: newValue, pressedOperator: true })
 }
 handleResult = () => {
     const { resultDisplay } = this.state;
     // eslint-disable-next-line 
     const result = eval(resultDisplay);
     this.setState({resultDisplay: result})
 }
    
    render(){
        const { resultDisplay } = this.state;
      return(
    <>

     <div className="main"> 
        <h1>
            Minha Calculadora
        </h1>
         <div className="display"> 
            { resultDisplay }
         </div>
         <div className="keyboards">
            <div className="numbers">
                <table className="keyboardsTable">
                    <tr>
                        <td> <Button variant="contained" onClick={() => this.handleChangeNumber(1)} className="button">1</Button></td>
                        <td> <Button variant="contained" onClick={() => this.handleChangeNumber(2)} className="button">2</Button></td>
                        <td> <Button variant="contained" onClick={() => this.handleChangeNumber(3)} className="button">3</Button></td>
                    </tr>
                    <tr>
                        <td> <Button variant="contained" onClick={() => this.handleChangeNumber(4)} className="button">4</Button></td>
                        <td> <Button variant="contained" onClick={() => this.handleChangeNumber(5)} className="button">5</Button></td>
                        <td> <Button variant="contained" onClick={() => this.handleChangeNumber(6)} className="button">6</Button></td>
                    </tr>
                    <tr>
                        <td> <Button variant="contained" onClick={() => this.handleChangeNumber(7)} className="button">7</Button></td>
                        <td> <Button variant="contained" onClick={() => this.handleChangeNumber(8)} className="button">8</Button></td>
                        <td> <Button variant="contained" onClick={() => this.handleChangeNumber(9)} className="button">9</Button></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td> <Button variant="contained" onClick={() => this.handleChangeNumber(0)} className="button">0</Button></td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div className="operations">
                <div> <Button variant="contained" onClick={() => this.handleChangeOperantion("+")} className="button">+</Button></div>
                <div> <Button variant="contained" onClick={() => this.handleChangeOperantion("-")} className="button">-</Button></div>
                <div> <Button variant="contained" onClick={() => this.handleChangeOperantion("*")} className="button">*</Button></div>
                <div> <Button variant="contained" onClick={() => this.handleResult()} className="button">=</Button></div>
            </div>
         </div>
     </div>
    </>
    );
  };
};

export default Calculator;
