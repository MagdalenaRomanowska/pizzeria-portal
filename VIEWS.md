# Dashboard
- '/'        <!---tu wypisujemy adresy względem strony głównej. Poniżej wymieniam co chcemy tu mieć. -->
  - statystyki dzisiejszych zamowień (zdalne i lokalne). <!---widoczne dla pracowników restauracji -->
  - lista rezerwacji i eventów zaplanowaych na dzisiaj. <!---widoczne dla pracowników restauracji -->

# Logowanie
- '/login'
  - pola na login i hasło,
  - guzik do zalogowania (link do dashboardu).

# Widok dostępności stolików
- '/tables'
  - wybór daty i godziny,
  - tabela z listą rezerwacji oraz wydarzeń.
    - każda kolumna będzie jednym stolikiem (kolumna = 1 stolik).
    - każdy wiersz = 30 minut.
    - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki.
    - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów.
- '/tables/booking/:id'  <!---szczegóły danej rezerwacji. Zmienne fragmenty adresów oznaczamy : . -->
  - zawiera wszystkie informacje dotyczące rezerwacji,
  - umożliwia edycję i zapisanie zmian. <!---Np. klient dzwoni, że chce cos zmienić, to tutaj możemy to zrobić.-->
- '/tables/booking/new'  <!---nowa rezerwacja -->
  - analogicznie do powyższej, bez początkowych informacji.
- '/tables/events/:id'   <!--- to jakby inny rodzaj rezerwacji, definiowane przez pracownikow restauracji. -->
  - analogicznie do powyższej, dla eventów.
- '/tables/events/new'
  - analogicznie do powyższej, dla eventów, bez początkowych informacji.

# Widok kelnera
- '/waiter'  <!---lista stolików i ich aktualny status np. czy złozono zamowienie, czy zapłacono. -->
  - tabela
    - w wierszach stoliki,
    - w kolumnach różne rodzaje informacji (np. status stolika, czas od ostatniej aktywności),
    - w ostatniej kolumnie dstepne akcje dla danego stolika.
- '/waiter/order/new'  <!--- podstrona dla kelnera do przyjęcia zamowienia -->
  - numer stolika (edytowalny, bo klienci mogą chcieć się przesiąść),
  - menu produktów (dostępnych w restauracji),
  - opcje wybranego produktu,
  - zamówienie (zamówione produkty z opcjami i ceną),
  - kwotę zamówienia.
- '/waiter/order/:id'  <!--- podstrona dla kelnera do wyświetlenia zamowienia -->
  - jak powyższa, z wprowadzoną od razu częścią informacji. <!--- Jeśli ktoś będzie chciał zamówić kolejne danie, kelner będzie mógl zrobić to na tej podstronie. -->
# Widok kuchni
- '/kitchen'  <!--- podstrona dla kucharza, wyświetlana na TV powieszonym w kuchni. -->
  - wyświetla listę zamówień w kolejności ich złożenia,
  - lista musi zawierać:
    - numer stolika (lub zamówienia zdalnego),
    - pełne informcje dotyczące zamówionych dań..
  - na liście musi być możliwość oznaczenia zamowienia jako zrealizowane.
