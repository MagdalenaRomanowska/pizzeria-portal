import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators Połączenie z API może się udać albo nie – np. jeśli użytkownik straci połączenie z
internetem. W przypadku błędu również chcemy poinformować o tym aplikację, a na stronie
wyświetlić komunikat błędu.*/
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchFromAPI = () => {  //kreator thunka, czyli fetchFromAPI. To funkcja, która nie przyjmuje żadnych argumentów. Zwraca ona thunka, czyli funkcję.
  return (dispatch, getState) => {// Thunk przyjmuje dwa argumenty – dispatch i getState. Pierwszy z nich, podobnie jak w mapDispatchToProps w kontenerze komponentu, jest funkcją służącą do dispatchowania akcji. Drugi, getState, jest funkcją pozwalającą na pobranie stanu aplikacji.
    dispatch(fetchStarted());//Dzięki tym dwóm funkcjom będziemy mogli zrealizować algorytm, który zapisaliśmy wcześniej. Dispatchujemy akcję z kreatora fetchStarted, czyli typu FETCH_START, a następnie uruchamiamy połączenie z API z pomocą Axiosa.

    Axios//Jego metoda .get służy do wysyłania zapytań metodą GET – analogicznie, do wysłania nowego zamówienia do API używalibyśmy metody .post.
      .get(`${api.url}/${api.tables}`)
      .then(res => { //Następnie używamy metody .then do zareagowania na odpowiedź serwera – w tym przypadku dispatchujemy akcję FETCH_SUCCESS, uruchamiając jej kreator fetchSuccess, któremu jako argument przekazujemy dane otrzymane z serwera, czyli res.data.
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => { //Jeżeli wystąpił błąd połączenia, zamiast funkcji podanej w metodzie .then wykona się funkcja z metody .catch – w tym wypadku dispatcher akcji FETCH_ERROR, którego kreator fetchError otrzyma komunikat błędu (a w przypadku braku komunikatu, otrzyma true).
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}
