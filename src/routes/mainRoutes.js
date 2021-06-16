import Movies from '../views/movies';
import MovieDetails from '../views/detailViews/movieDetails';
import Peoples from '../views/peoples';
import PeopleDetails from '../views/detailViews/peopleDetails';
import Planets from '../views/planets';
import PlanetDetails from '../views/detailViews/planetDetails';
import Homepage from '../views/homepage';

//Defining all the possible routes for our application
var mainRoutes = [
  { path: `/`, name: "Homepage", component: Homepage },
  { path: `/movies`, name: "Movies", component: Movies },
  { path: `/movie/:id`, name: "Movies", component: MovieDetails },
  { path: `/peoples`, name: "Peoples", component: Peoples },
  { path: `/people/:id`, name: "Peoples", component: PeopleDetails },
  { path: `/planets`, name: "Planets", component: Planets },
  { path: `/planet/:id`, name: "Planets", component: PlanetDetails },
];
export default mainRoutes;
