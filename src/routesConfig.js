import Home from './screens/Home';
import Phrases from './screens/Phrases';

const routesConfig = [
  {
    path:"/",
    component:Home,
    exact:true
  },
  {
    path:"/phrases",
    component:Phrases,
    exact:true
  }
]

export default routesConfig;