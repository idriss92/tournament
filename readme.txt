------------Tournaments index page-------------------

states

montrer liste des tournois. appelons cet etat tournois
montrer "Loading..." appelons cet etat loading
montrer "Error" s'il y a une erreur. appelons cet etat error
{ tournamentsList: {tournamentts: [], error:null, loading: false} //initial state

actions:
headers performs delete post ajax request and uses the followings actions
"FETCH_TOURNAMENTS"
"FETCH_TOURNAMENTS_SUCCESS"
"FETCH_TOURNAMENTS_FAILURE"
"RESET_ACTIVE_POST"


--------------Tournaments details page----------------
{ newTournament: null, error:null, loading: false} //initial state
"CREATE_TOURNAMENT"
"CREATE_TOURNAMENT_SUCCESS"
"CREATE_TOURNAMENT_FAILURE"
"NEW_TOURNAMENT_RESET"


--------------Tournaments form page-------------------
{ deleteTournament: null, error:null, loading: false} //initial state
"DELETE_TOURNAMENTS"
"DELETE_TOURNAMENTS_SUCCESS"
"DELETE_TOURNAMENTS_FAILURE"
"RESET_DELETED_TOURNAMENT"

