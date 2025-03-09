import './App.css'
import Guest from './components/Guest'
import Profile from "./components/Profile";
import {Route, Routes, Navigate} from "react-router";
import {useAppSelector} from "./app/hooks.ts";

function App() {
    const token = useAppSelector(state => state.token);

    return (
        <>
            <Routes>
                {token ?
                    (<>
                        (<Route path='/profile' element={<Profile/>}/>)
                        (<Route path='/' element={<Navigate to='/profile'/>}/>)
                    </>) :
                    (<>
                        <Route path='/' element={<Guest/>}/>
                        <Route path='/profile' element={<Navigate to='/'/>}/>
                    </>)
                }
            </Routes>
        </>
    )
}

export default App
