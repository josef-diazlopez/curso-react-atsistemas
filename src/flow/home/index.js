import Home from '../../pages/home';
import withSearch from '../../components/HOC/withSearch'
import { INIT_HOME } from '../../actions/flow';
import {charSelector, murderSelector, tempSelector} from '../../selectors/home';

export default {
  component: withSearch(Home),
  selectors: (state) => ({
    temps: tempSelector(state),
    chars: charSelector(state),
    murders: murderSelector(state)
  }),
  actions: {
    onTempClick: () => ({}),
    onCharClick: () => ({}),
    onMurderClick: () => ({}),
  },
  init: INIT_HOME,
};