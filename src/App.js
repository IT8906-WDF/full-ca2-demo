import { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import storage from './storage.js';
import { increment } from './counterSlice.js';
import { createHashRouter, Link, Outlet, RouterProvider, useParams } from 'react-router-dom';

const router = createHashRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/hello',
                element: <p>Hello World</p>,
            },
            {
                path: '/detail/:id',
                element: <DetailPage />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}

function RootPage(props) {
    return (
        <div>
            <div>
                <ul>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                    <Link to="/hello">
                        <button>Hello</button>
                    </Link>
                </ul>
            </div>
            <div>
                <Provider store={storage}>
                    <Outlet />
                </Provider>
            </div>
        </div>
    );
}

function Home() {
    const name = 'Jeremiah Ang';
    return (
        <div>
            <p>Hello {name}</p>

            <EmployeeReport />
        </div>
    );
}

function EmployeeReport(props) {
    const employees = useSelector((store) => store.employee.value);
    return (
        <div>
            <ul>
                {employees.map((people, index) => (
                    <li>
                        {people.name} {people.score >= 18 ? 'OK!' : 'No!'}{' '}
                        <Link to={'/detail/' + index}>
                            <button>See Report</button>
                        </Link>
                    </li>
                ))}
            </ul>
            <Counter name="YES" />
            <Counter name="NO" />
        </div>
    );
}

function Counter(props) {
    const [counter, setCounter] = useState(0);

    const totalCount = useSelector((store) => store.counter.value.count);
    const dispatch = useDispatch();

    return (
        <button
            onClick={() => {
                setCounter(counter + 1);
                dispatch(increment(1));
            }}
            disabled={totalCount >= 30}
        >
            {props.name} {counter}
        </button>
    );
}

function DetailPage(props) {
    const employees = useSelector((store) => store.employee.value);

    const params = useParams();
    const id = params.id;
    return (
        <div>
            <ul>
                <li>Name: {employees[id].name}</li>
                <li>Score: {employees[id].score}</li>
                <li>Report: {employees[id].report}</li>
            </ul>
        </div>
    );
}
