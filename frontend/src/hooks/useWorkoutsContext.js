import { WorkoutContext } from "../context/WorkoutsContext";
import { useContext } from "react";


export const useWorkoutsContext = () =>{
    const context = useContext(WorkoutContext)

    if(!context) {
        throw Error('useworkout context must be used inside')
    }

    return context
}