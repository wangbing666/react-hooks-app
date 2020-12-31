import { useReducer } from 'react';

export function isFunction(value) {
  return typeof value === 'function';
}

function stateReducer(state, newState) {
  return { ...state, ...newState };
}

export function useFormState(initialState) {
  const [state, setState] = useReducer(stateReducer, initialState || {});

  const createPropsGetter = type => (name) => {
    const hasValueInState = state[name] !== undefined;

    function setInitialValue() {
      let value = "";
      setState({ [name]: value });
    }

    const inputProps = {
      name, // 给 input 添加 type: text or password
      get value() {
        if (!hasValueInState) {
          setInitialValue(); // 给初始化值
        }
        return hasValueInState ? state[name] : ""; // 赋值
      },
      onChange(e) {
        let { value } = e.target;
        setState({ [name]: value }); // 修改对应 Key 的值
      }
    };

    return inputProps;
  };

  const inputPropsCreators = ["text", "password"].reduce(
    (methods, type) => ({ ...methods, [type]: createPropsGetter(type) }),
    {}
  );

  return [
    { values: state }, // formState
    inputPropsCreators
  ];
}