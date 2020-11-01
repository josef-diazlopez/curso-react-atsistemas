import Episode from '../../pages/episode';
import withSearch from '../../components/HOC/withSearch'
import { INIT_EPISODE } from '../../actions/flow';
// import {} from '../../selectors/home';

export default {
  component: withSearch(Episode),
  selectors: (state) => ({
  }),
  actions: {
  },
  init: INIT_EPISODE,
};