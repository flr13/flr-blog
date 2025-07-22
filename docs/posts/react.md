---
title: react
date: '2025-07-18'
category: 框架
tags: []
---

### 1\. React 语法基础

#### 1.1 组件定义
React 中组件是构建用户界面的核心。组件可以是函数组件或类组件。函数组件更简洁，推荐使用。
- **函数组件**
    - 示例代码：
    ```tsx
    import React from 'react';

    const MyComponent = (props) => {
        return <div>Hello, {props.name}!</div>;
    };

    export default MyComponent;
    ```
    - 说明：函数组件接收 `props` 作为参数，返回 JSX 描述的 UI。
- **类组件**（不推荐，但需要了解）
    - 示例代码：
    ```tsx
    import React, { Component } from 'react';

    class MyComponent extends Component {
        render() {
            return <div>Hello, {this.props.name}!</div>;
        }
    }

    export default MyComponent;
    ```
    - 说明：类组件继承自 `React.Component`，通过 `render` 方法返回 JSX。

#### 1.2 JSX 语法
JSX 是 React 的模板语法，允许在 JavaScript 中编写类似 HTML 的代码。
- **基本用法**
    - 示例代码：
    ```tsx
    const element = <h1>Hello, world!</h1>;
    ```
    - 说明：JSX 可以直接嵌入 JavaScript 表达式，用 `{}` 包裹。
- **属性绑定**
    - 示例代码：
    ```tsx
    const user = { name: 'Alice' };
    const element = <h1>Hello, {user.name}!</h1>;
    ```
    - 说明：可以将 JavaScript 变量的值动态绑定到 JSX 中。
- **事件绑定**
    - 示例代码：
    ```tsx
    <button onClick={() => alert('Clicked!')}>Click me</button>
    ```
    - 说明：使用 `onClick` 等事件属性绑定事件处理函数。

#### 1.3 状态管理
状态（`state`）是组件内部用于存储数据的变量，当状态更新时，组件会重新渲染。
- **使用 `useState`**
    - 示例代码：
    ```tsx
    import React, { useState } from 'react';

    const Counter = () => {
        const [count, setCount] = useState(0);

        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        );
    };

    export default Counter;
    ```
    - 说明：`useState` 是一个 Hook，用于在函数组件中添加状态。

#### 1.4 生命周期
生命周期方法是类组件特有的，用于在组件的不同阶段执行代码。
- **类组件生命周期**
    - **`constructor`**：初始化状态。
    - **`componentDidMount`**：组件挂载后执行，适合进行网络请求。
    - **`componentDidUpdate`**：组件更新后执行。
    - **`componentWillUnmount`**：组件卸载前执行，用于清理资源。
    - 示例代码：
    ```tsx
    class LifecycleComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = { data: null };
        }

        componentDidMount() {
            fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => this.setState({ data }));
        }

        componentDidUpdate(prevProps) {
            if (this.props.someProp !== prevProps.someProp) {
                console.log('Component updated');
            }
        }

        componentWillUnmount() {
            console.log('Component will unmount');
        }

        render() {
            return <div>{this.state.data}</div>;
        }
    }
    ```
    - 说明：类组件的生命周期方法用于控制组件的行为。

### 2\. React 高级特性

#### 2.1 React Hooks
React Hooks 是 React 16.8 引入的新特性，允许在函数组件中使用状态和其他 React 特性。
- **`useState`**：已在前面介绍。
- **`useEffect`**：用于替代生命周期方法。
    - 示例代码：
    ```tsx
    import React, { useState, useEffect } from 'react';

    const DataFetcher = () => {
        const [data, setData] = useState(null);

        useEffect(() => {
            fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => setData(data));
        }, []); // 空数组表示只在组件挂载时执行

        return <div>{data}</div>;
    };

    export default DataFetcher;
    ```
    - 说明：`useEffect` 的第二个参数是一个依赖数组，用于控制何时重新执行副作用。

#### 2.2 组件通信
组件之间可以通过 `props` 传递数据。
- **父子组件通信**
    - 父组件向子组件传递数据：
    ```tsx
    // 父组件
    import React from 'react';
    import ChildComponent from './ChildComponent';

    const ParentComponent = () => {
        const message = 'Hello from parent!';
        return <ChildComponent message={message} />;
    };

    export default ParentComponent;

    // 子组件
    import React from 'react';

    const ChildComponent = (props) => {
        return <div>{props.message}</div>;
    };

    export default ChildComponent;
    ```
    - 子组件向父组件传递数据：
    ```tsx
    // 父组件
    import React, { useState } from 'react';
    import ChildComponent from './ChildComponent';

    const ParentComponent = () => {
        const [childData, setChildData] = useState('');

        const handleChildData = (data) => {
            setChildData(data);
        };

        return (
            <div>
                <ChildComponent onSendData={handleChildData} />
                <p>Received from child: {childData}</p>
            </div>
        );
    };

    export default ParentComponent;

    // 子组件
    import React from 'react';

    const ChildComponent = (props) => {
        const sendDataToParent = () => {
            props.onSendData('Hello from child!');
        };

        return <button onClick={sendDataToParent}>Send Data</button>;
    };

    export default ChildComponent;
    ```

#### 2.3 路由
React Router 是 React 的路由管理库，用于实现单页应用。
- **安装 React Router**
    ```bash
    npm install react-router-dom
    ```
- **基本用法**
    ```tsx
    import React from 'react';
    import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

    const Home = () => <div>Home Page</div>;
    const About = () => <div>About Page</div>;

    const App = () => {
        return (
            <Router>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </nav>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    };

    export default App;
    ```

#### 2.4 Redux
Redux 是一个状态管理库，用于管理复杂应用的状态。
- **安装 Redux**
    ```bash
    npm install redux react-redux
    ```
- **基本用法**
    - **定义 Action**
    ```tsx
    // actions.js
    export const increment = () => ({
        type: 'INCREMENT',
    });

    export const decrement = () => ({
        type: 'DECREMENT',
    });
    ```
    - **定义 Reducer**
    ```tsx
    // reducer.js
    const initialState = { count: 0 };

    const counterReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return { ...state, count: state.count + 1 };
            case 'DECREMENT':
                return { ...state, count: state.count - 1 };
            default:
                return state;
        }
    };

    export default counterReducer;
    ```
    - **配置 Store**
    ```tsx
    // store.js
    import { createStore } from 'redux';
    import counterReducer from './reducer';

    const store = createStore(counterReducer);

    export default store;
    ```
    - **在组件中使用 Redux**
    ```tsx
    import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { increment, decrement } from './actions';

    const Counter = () => {
        const count = useSelector((state) => state.count);
        const dispatch = useDispatch();

        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        );
    };

    export default Counter;
    ```

### 3\. 总结
React 是一个强大的前端框架，通过组件化、状态管理和生命周期等特性，可以构建复杂的用户界面。
