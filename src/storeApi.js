/* eslint-disable no-unused-vars */
import { useStore } from "./store";

const useStoreApi = () => {
    const {state, dispatch} = useStore();

    return {
        address: state.address,
        balance: state.balance,
        message: state.message,
        setBalance: newBalance => {
            dispatch({
                type: "SET-BALANCE",
                newBalance
            });
        },
        setAddress: newAddress => {
            dispatch({
                type: "NEW-BALANCE",
                newAddress,
                message: "New account added successfully!"
            });
        }
    };
}