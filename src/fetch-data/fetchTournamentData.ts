import { tournamentService } from '../services'

const fetchData = function(){
    return tournamentService.getTournaments()
        .then(res => res.data)
        .catch(() => []);
};

export default fetchData