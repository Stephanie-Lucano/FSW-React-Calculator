import OperationCalculate from "./OperationCalculate";

export default function DisplayCalculatorKeypadAndScreen() {
    return (
        <div>
            <p>Displaying the keys</p>
            <p>0 1 2 3 4 5 6 7 8 9</p>
            <p>* + - /</p>
            <OperationCalculate />
            <p>Displaying the answer 1, 2, 0, 1</p>    
        </div>
    )
}