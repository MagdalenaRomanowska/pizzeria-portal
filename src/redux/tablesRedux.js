//tylko ten plik będzie wiedział zarówno o strukturze reduksowego stanu aplikacji, jak i o istnieniu API.
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

const UPDATE_START = createActionName('UPDATE_START');
const UPDATE_SUCCESS = createActionName('UPDATE_SUCCESS');
const UPDATE_ERROR = createActionName('UPDATE_ERROR');

/* action creators Połączenie z API może się udać albo nie – np. jeśli użytkownik straci połączenie z
internetem. W przypadku błędu również chcemy poinformować o tym aplikację, a na stronie
wyświetlić komunikat błędu. Do tej pory nasze akcje były tworzone przez kreatory akcji, które zwracały
obiekt z dwoma właściwościami – payload i type. Od teraz będziemy mogli również dispatchować funkcje.*/
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const updateStarted = payload => ({ payload, type: UPDATE_START });
export const updateSuccess = payload => ({ payload, type: UPDATE_SUCCESS });
export const updateError = payload => ({ payload, type: UPDATE_ERROR });

export const fetchFromAPI = () => { /* thunk creators */ //kreator thunka, czyli fetchFromAPI. To funkcja, która nie przyjmuje żadnych argumentów. Zwraca ona thunka, czyli funkcję.
  return (dispatch, getState) => {// Thunk przyjmuje dwa argumenty – dispatch i getState. Pierwszy z nich, podobnie jak w mapDispatchToProps w kontenerze komponentu, jest funkcją służącą do dispatchowania akcji. Drugi, getState, jest funkcją pozwalającą na pobranie stanu aplikacji.
    dispatch(fetchStarted());//Dzięki tym dwóm funkcjom będziemy mogli zrealizować algorytm, który zapisaliśmy wcześniej. Dispatchujemy akcję z kreatora fetchStarted, czyli typu FETCH_START, a następnie uruchamiamy połączenie z API z pomocą Axiosa.

    //Axios używamy zamiast fetch (wbudowanego w przeglądarkę). Ułatwi nam to wykonywanie połączeń AJAXowych, a w szczególności wychwytywanie błędów.
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

export const updateAPI = () => { /* thunk creators */ //kreator thunka, czyli fetchFromAPI. To funkcja, która nie przyjmuje żadnych argumentów. Zwraca ona thunka, czyli funkcję.
  return (dispatch, getState) => {// Thunk przyjmuje dwa argumenty – dispatch i getState. Pierwszy z nich, podobnie jak w mapDispatchToProps w kontenerze komponentu, jest funkcją służącą do dispatchowania akcji. Drugi, getState, jest funkcją pozwalającą na pobranie stanu aplikacji.
    dispatch(updateStarted());//Dzięki tym dwóm funkcjom będziemy mogli zrealizować algorytm, który zapisaliśmy wcześniej. Dispatchujemy akcję z kreatora fetchStarted, czyli typu FETCH_START, a następnie uruchamiamy połączenie z API z pomocą Axiosa.

    //Axios używamy zamiast fetch (wbudowanego w przeglądarkę). Ułatwi nam to wykonywanie połączeń AJAXowych, a w szczególności wychwytywanie błędów.
    Axios//Jego metoda .get służy do wysyłania zapytań metodą GET – analogicznie, do wysłania nowego zamówienia do API używalibyśmy metody .post.
      .post(`${api.url}/${api.tables}`, {'id': '1', 'status': 'prepared', 'order': null})  //wysyłam nowy stan obiektu, podpowiedź: https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
      .then(res => { //Następnie używamy metody .then do zareagowania na odpowiedź serwera – w tym przypadku dispatchujemy akcję FETCH_SUCCESS, uruchamiając jej kreator fetchSuccess, któremu jako argument przekazujemy dane otrzymane z serwera, czyli res.data.
        dispatch(updateSuccess(res.data));
      })
      .catch(err => { //Jeżeli wystąpił błąd połączenia, zamiast funkcji podanej w metodzie .then wykona się funkcja z metody .catch – w tym wypadku dispatcher akcji FETCH_ERROR, którego kreator fetchError otrzyma komunikat błędu (a w przypadku braku komunikatu, otrzyma true).
        dispatch(updateError(err.message || true));
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
    case UPDATE_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case UPDATE_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case UPDATE_ERROR: {
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
