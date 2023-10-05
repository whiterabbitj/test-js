/**
 * If you want to prove your React skills, please try this test.
 *
 * TIPS:
 * - These are a theoretical questions, there is no need to install packages or run the code.
 */

import React from 'react';

/**
 * TEST 1
 *
 * This test is a simple one with conditional rendering.
 *
 * This component has to return:
 *  The name in blue if the age is greater than or equal than 18.
 *  The name in red otherwise.
 */

interface ITest1ComponentProps {
    name: string;
    age: number;
}

const Test1Component = ({ name, age }: ITest1ComponentProps) => {
    const nameStyle = age >= 18 ? { color: 'blue' } : { color: 'red' };

    return <div style={nameStyle}>{name}</div>;
};


export default Test1Component;

/**
 * TEST 2
 *
 * This is test is about handling changes of the data from an API.
 *
 * Like test 1, this component has to return:
 *  The name in blue if the age is greater than or equal than 18.
 *  The name in red otherwise.
 *
 * The difference is we don't have the age, we need to use the function below to get it.
 * The name from the parent can change any time, we have ensure the component rerenders if it happens
 * Getting data from an API (we simulate it with a timeout) is async, please be sure the code updates when we get the response back from the API
 */

/* This function accepts a name and simulates an API call to get the age of the person
* Please use it in the component
* @param name Name of the person we want to find the age
* @returns random integer from 0 to 39
*/
const getAge = async (name: string): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 40));
        }, 500);
    });
};

interface ITest2ComponentProps {
    name: string;
}
const getAge = async (name: string): Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 40));
        }, 500);
    });
};

interface ITest2ComponentProps {
    name: string;
}

function Test2Component({ name }: ITest2ComponentProps): JSX.Element {
    const [age, setAge] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ageFromApi = await getAge(name);
                setAge(ageFromApi);
            } catch (error) {
                console.error("Error fetching age:", error);
            }
        };

        fetchData();
    }, [name]);

    if (age === null) {
        return <div>Loading...</div>;
    }

    const nameStyle = age >= 18 ? { color: "blue" } : { color: "red" };

    return (
        <div style={nameStyle}>
            {name}, Age: {age}
        </div>
    );
}

export default Test2Component;



