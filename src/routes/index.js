import config from '../config/routes';

import Home from '../pages/Home/Home.js';
import QuestionPage from '../pages/QuestionPage/QuestionPage';

const routes = [
    { path: config.home, component: Home },
    { path: config.question, component: QuestionPage },
]

export default routes;
