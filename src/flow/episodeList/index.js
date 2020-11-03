import EpisodeList from '../../pages/episodeList';
import withModal from '../../components/HOC/withModal'
import { INIT_EPISODE_LIST } from '../../actions/flow';
import {} from '../../selectors/episodeList';

export default {
  component: withModal(EpisodeList),
  selectors: (state) => ({
    
  }),
  actions: {
    onTempClick: () => ({}),
    onCharClick: () => ({}),
    onMurderClick: () => ({}),
  },
  init: INIT_EPISODE_LIST,
};