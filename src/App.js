import React from 'react';
import Layout from './components/Layout/Layout';
import ListButton from './components/ListButton/ListButton';
import { useDispatch, useSelector } from 'react-redux';
import { calculatorActions } from './components/store/store';
const App = () => {
  const dispatch = useDispatch();
  const currentResult = useSelector(state => state.calculator.currentResult);
  const getValueButton = (value) =>{
    if(value === 'DEL'){
      dispatch(calculatorActions.delete());
    }
    if((value <= 9 && value >= 0) || value === '.'){
      if(currentResult.includes('.') && value === '.'){
        return;
      }
      // if user click 0 => 9
      // turn to string and pass it
      dispatch(calculatorActions.calculateFirst(value.toString()));
    }
    if(value === 'AC'){
      dispatch(calculatorActions.removeOneCharacter());
     }
    if(value === '='){
      dispatch(calculatorActions.save());
    }
    switch(value){
      case '+':
        dispatch(calculatorActions.getOperator(value));
        break;
      case '-':
        dispatch(calculatorActions.getOperator(value));
        break;
      case 'x':
        dispatch(calculatorActions.getOperator(value));
        break;
      case '÷':
        dispatch(calculatorActions.getOperator(value));
        break;
      default:
        return;
    }
  }
  return (
    <Layout>
      <div>
        <ListButton getValueButton={getValueButton}/>
      </div>
    </Layout>
  );
}

export default App;
