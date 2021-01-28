import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './main/pages/dashboard/Dashboard';

const RouterComponent = () => {
    return (
        <div>
            <Router>
                <Route path="/">
                    <Dashboard />
                </Route>
            </Router>
        </div>
    )
}
export default RouterComponent;