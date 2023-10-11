import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import LungsTestGame from '../components/games/lungs_test_game';
import Games from '../components/games';
import IqBuildingGame from '../components/games/iq_building_game';
import IqTestGame from '../components/games/iq_test_game';

const AllRoutes = () => {
    return <>
        <Routes>
            <Route exact path='/' element={< Home />}>
                <Route exact path='games' element={<Games/>}></Route>
                <Route exact path="/games/lung-test" element={<LungsTestGame />}></Route>
                <Route exact path="/games/boost-iq" element={<IqBuildingGame />}></Route>
                <Route exact path="/games/iq-test" element={<IqTestGame />}></Route>
            </Route>
        </Routes>
    </>
}

export default AllRoutes;