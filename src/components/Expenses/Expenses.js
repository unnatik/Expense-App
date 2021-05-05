import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.items[0].date}
        amount={props.items[0].amount}
        title={props.items[0].title}
      />
      <ExpenseItem
        date={props.items[2].date}
        amount={props.items[2].amount}
        title={props.items[2].title}
      />
      <ExpenseItem
        date={props.items[3].date}
        amount={props.items[3].amount}
        title={props.items[3].title}
      />
    </Card>
  );
}

export default Expenses;
