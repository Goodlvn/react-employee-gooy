import React, { createContext, useReducer, useContext } from "react";

const EmpContext = createContext({
    id: "",
    name: ""
});
const { Provider } = EmpContext;


const data = API.grabEmployees();

data.forEach(person => {
         dispatch({
             type: "load",
             name: person.firtName
         })
})

function reducer(state, action) {
    switch(action.type) {
        case "load":
            return [
                ...state, 
            {
                id: state.length * Math.random(),
                name: action.name
            }
        ];
        default: 
        console.log("Its working");
    }
}

const EmpProvider = ({value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, [])

    return <Provider value={[state, dispatch]} {...props} />
}

const useEmpContext = () => {
  return useContext(EmpContext);
};

export { EmpProvider, useEmpContext };
