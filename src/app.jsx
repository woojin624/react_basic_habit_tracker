import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Running', count: 0 },
            { id: 3, name: 'Coding', count: 0 },
        ],
    };

    handleIncreament = (habit) => {
        const habits = this.state.habits.map((item) => {
            if (item.id === habit.id) {
                return { ...habit, count: habit.count + 1 };
            }
            return item;
        });
        this.setState({ habits });
    };
    handleDecreament = (habit) => {
        const habits = this.state.habits.map((item) => {
            if (item.id === habit.id) {
                const count = habit.count - 1;
                return { ...habit, count: count < 0 ? 0 : count };
            }
            return item;
        });
        this.setState({ habits });
    };
    handleDelete = (habit) => {
        const habits = this.state.habits.filter((item) => item.id !== habit.id);
        this.setState({ habits });
    };
    handleAdd = (name) => {
        const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
        this.setState({ habits });
    };

    handleReset = () => {
        const habits = this.state.habits.map((habit) => {
            if (habit.count !== 0) {
                return { ...habit, count: 0 };
            }
            return habit;
        });
        this.setState({ habits });
    };

    render() {
        return (
            <>
                <Navbar totalCount={this.state.habits.filter((item) => item.count > 0).length} />
                <Habits
                    habits={this.state.habits}
                    onIncrement={this.handleIncreament} //
                    onDecrement={this.handleDecreament}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                    onReset={this.handleReset}
                />
            </>
        );
    }
}

export default App;

// return React.createElement('h1', {}, 'Hello:)!!'); // (태그, 클래스-스타일, 데이터)
// 위에 써진 코드는 디자이너는 물론 개발자도 보기 불편하기 때문에 이를 직관적으로 보기 위해 나온 것이 아래에 있는 jsx이다.

// return <h1 className="title" onClick="">Hello! :)</h1>; // class -> className, onclick -> onClick
// const name = 'ellie';
// jsx에서는 형제 태그를 쓸 수 없기 때문에 비어있는<>를 쓰거나 <React.Fragment>를 사용하여 묶어줘야한다.
// return (
// <React.Fragment>

/* <h1>Hello! {name}:)</h1> */

/* <h1>Hello</h1> */

/* jsx안에서는 자바스크립트 코드가 작성 가능합니다 */

/* 이름이 있다면 && 뒤에 코드를 출력 */

/* {name && <h1>Hello! {name}:)</h1>} */

/* {['🍎', '🍓'].map((item) => ( */

/* <h1>{item}</h1> */

/* ))} */

// </React.Fragment>
// );
