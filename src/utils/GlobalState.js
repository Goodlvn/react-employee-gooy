import React, { createContext, useReducer, useContext } from "react";

const EmpContext = createContext();
const { Provider } = EmpContext;

const reducer = (state, action) => {
    switch(action.type) {
        case "load":
            return [...state, ]
        default: 
        console.log("Its working");
    }
}

const EmpProvider = ({value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, { employees: value })

    return <Provider value={[state, dispatch]} {...props} />
}

const useEmpContext = () => {
  return useContext(EmpContext);
};

export { EmpProvider, useEmpContext };
