import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    handleIncreament = (habit) => {
        this.props.onIncrement(habit);
    };
    handleDecreament = (habit) => {
        this.props.onDecrement(habit);
    };
    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    handleAdd = (name) => {
        this.props.onAdd(name);
    };

    // 이 해빗이라는 컴포넌트는 아무런 데이터도 없고 멍청한 컴포넌트이다.
    // 대신에 props에 전달된 이 습관들의 배열을 빙글빙글 돌면서 해빗이라는 컴포넌트로 변경해서 보여주는 이런 일만 하고 있다.

    render() {
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd} />
                <ul>
                    {this.props.habits.map((habit) => (
                        <Habit
                            key={habit.id} //
                            habit={habit} //
                            onIncrement={this.handleIncreament} //
                            onDecrement={this.handleDecreament}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>
                    Reset All
                </button>
            </>
        );
    }
}

export default Habits;
