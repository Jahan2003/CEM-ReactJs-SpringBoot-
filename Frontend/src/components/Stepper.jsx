import { Stepper } from 'react-form-stepper';
function CustomStepper(props) {
    return (
        <Stepper
        { ...props }
        connectorStateColors={true}
        connectorStyleConfig={{
          completedColor: '#5d5fe7',
          activeColor: '#5d5fe7',
          disabledColor: '#eee'
        }}
        styleConfig={{
          activeBgColor: '#5d5fe7',
          completedBgColor: '#5d5fe7',
          inactiveBgColor: '#eee',
          activeTextColor: 'white',
          completedTextColor: 'white',
          inactiveTextColor: '#444'
        }}
        />
    );
  }
  export default CustomStepper;