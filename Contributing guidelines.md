## Co będzie ładowane w samochody?

Wyłączenie o ładunkach częściowych, tzw. drobnicy – nie uwzględniamy ładunków cało pojazdowych.

## Wstępny plan apliakcji:

Projekt ma dwie fazy i trzy główne elementy:

- Faza i pierwszy element to aplikacja do zarządzania przestrzenią ładunkową pojazdów.
- Faza to dwa elementy, aplikacja do zgłaszania wolnych ładunków i przestrzeni ładunkowych oraz drugi element łączenie jednego z drugim i automatyzacja planowania.

- Aplikacja do zarządzania przestrzenią ładunkową, jest to najprostszy element, w związku z tym najszybciej do zrobienia i wdrożenia. Założenia to możliwość szybkiego wyboru typowej przestrzeni ładunkowej oraz typowych nośników oraz możliwość rozplanowania ładunku w przestrzeni ręcznie lub automatycznie. Dodatkowa opcja (może nawet płatna) to możliwość ręcznego wprowadzenia wymiarów zarówno przestrzeni jak i wymiarów elementów. Myślę o wersji opisowej na bazie formularzy oraz wersji graficznej na bazie danych z formularzy. Po podaniu wymaganych danych lub wyborze standardów, automat przelicza ile zostanie jeszcze wolnej przestrzeni na wybranej przestrzeni i ma możliwość automatycznego zaplanowania ułożenia.
- Aplikacja do zgłaszania wolnych ładunków i wolnych przestrzeni ładunkowych. Onlinie, zgłoszenia na bazie wyłącznie formularzy z wykorzystaniem bazy danych i możliwości przesyłania formularzy do własnego API. Po przetworzeniu API zwraca informacje na stronę w postaci kolejnych wpisów, można je filtrować po zadanych parametrach. To grubszy temat z wykorzystaniem wiedzy Full stack – głównie w back-end i pewnie dedykowanego serwera.
- Planowanie – to aplikacja na bazie dwóch poprzednich, wykorzystanie wolnej powierzchni ładunkowej „mojego” pojazdu na podstawie danych (zapytań) przesłanych przez klientów w aplikacji do zgłaszania.

Do tego automat, który kontaktuje się z klientem, potwierdza daty odbiorów, dostaw i ceny.

## Faza Pierwsza - (Aplikacja do zarządzania przestrzenią ładunkową pojazdów) funkcje biznesowe:

- Panel logowania
- Możliwość zalogowania do aplikacji - wtedy dane wyboru użytkownika powinny być zapamiętywane przez program. Użytkownik zalogowany powninien mieć mozliwość konfiguracji i zapisu typowych dla siebie parametrów pojazdów.
- Możliwość korzystania z aplikacji bez logowanie - uzytkownik nie ma mozliwości skonfigurować i zapisać paramertów.
- Panel wyboru środka transportu
- wybór przestrzeni ładunkowej/środka transportu - tylko możliwość wyboru za pomocą wskazanych przez program opcji z listy (OPCJE*DOSTARCZY*@TM),
- dane liczbowe: długosć, szerokość, wysokość, łaowność (DANE*DOSTARCZY*@TM),
- DO_OMÓWIENIA wizualizacja
- Panel wyboru ładunku i miejsca
- w tym panelu również widoczny środek transportu (jeżeli będzie wizualizacja) i jego kubatura,
- npole wyboru środków ładunkowych - z listy na podstawie typowych danych nosników transportowych (DOSTARCZY\_@TM), ale wysokość, waga i ilość określana "z ręki". Dodatkowo mozliwośc wpisania przez użytkownika wszystkich parametrów z ręki
- pole wpisywania adresu i daty odbiory i dostawy przesyłki (DO_OMÓWIENIA API GOOGLE MAPS)
- Mechanika aplikacji
- użytkownik po zalogowaniu /lub nie widzi panel wyboru pojazdu/przestrzeni ładunkowej,
- po dokonaniu wybory widzi panel wyboru ładunku, miejsca i daty, podczas wyboru może cofnać się i zmienić pojazd - dla nie zalogowanych zaczyna od początku, dla zalogowanych program pyta czy zapisać dotychczasowy postępp załadunku
- każdorazowo po dokonaniu wybory ładunku, miejsca i daty klika "załaduj", jeżeli nie to ten wybór nie bedzei brany pod uwagę przez program
- po kliknieciu załaduj program dokonuje obliczeń i aktualizuje przestrzeń ładunkowę i routing (trasę) (DO_OMÓWIENIA - czy od razy opcja aktualizacji tasy, będzei pisana)
- Obliczenia programu
