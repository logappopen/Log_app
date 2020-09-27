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

1. Panel logowania

- Możliwość zalogowania do aplikacji - wtedy dane wyboru użytkownika powinny być zapamiętywane przez program. Użytkownik zalogowany powninien mieć mozliwość konfiguracji i zapisu typowych dla siebie parametrów pojazdów.
- Możliwość korzystania z aplikacji bez logowanie - uzytkownik nie ma mozliwości skonfigurować i zapisać paramertów.

2. Panel wyboru środka transportu

- wybór przestrzeni ładunkowej/środka transportu - tylko możliwość wyboru za pomocą wskazanych przez program opcji z listy (OPCJE*DOSTARCZY*@TM),
- dane liczbowe: długosć, szerokość, wysokość, łaowność (DANE*DOSTARCZY*@TM),
- DO_OMÓWIENIA wizualizacja

3. Panel wyboru ładunku i miejsca

- w tym panelu również widoczny środek transportu (jeżeli będzie wizualizacja) i jego kubatura,
- npole wyboru środków ładunkowych - z listy na podstawie typowych danych nosników transportowych (DOSTARCZY\_@TM), ale wysokość, waga i ilość określana "z ręki". Dodatkowo mozliwośc wpisania przez użytkownika wszystkich parametrów z ręki
- pole wpisywania adresu i daty odbiory i dostawy przesyłki (DO_OMÓWIENIA API GOOGLE MAPS)

4. Mechanika aplikacji

- użytkownik po zalogowaniu /lub nie widzi panel wyboru pojazdu/przestrzeni ładunkowej,
- po dokonaniu wybory widzi panel wyboru ładunku, miejsca i daty, podczas wyboru może cofnać się i zmienić pojazd - dla nie zalogowanych zaczyna od początku, dla zalogowanych program pyta czy zapisać dotychczasowy postępp załadunku
- każdorazowo po dokonaniu wybory ładunku, miejsca i daty klika "załaduj", jeżeli nie to ten wybór nie bedzei brany pod uwagę przez program
- po kliknieciu "załaduj" program dokonuje obliczeń i aktualizuje przestrzeń ładunkowę i routing (trasę) (DO_OMÓWIENIA - czy od razy opcja aktualizacji tasy, będzei pisana)

5. Obliczenia programu (bez aktualizacji trasy)

- na podstawie wprowadzonych lub wybranych danych przez uzytkownika przeliczają się wartości przestrzeni ładunkowej pojazdu: szerokość _ długość _ wysokość
- dane te ograniczają mozliwość załadunku towaru do wielkosći przestrzeni ładunkowej
- przykład wymiarów naczepy cieżarowej: 250cm szerokości 1360cm długości 275cm wysikości
- standardowa i podstawowa jednostka opakowania w logistyce to euro-paleta o wymiatach 120cm _ 80cm _ Xcm(wysokość palety)
- na środek transportowy o podanych wyżej wymiarach można załadować maksymalnie 33 euro-palety o przykładowej wysokości X=200cm, wynika to z obliczenia że dwie palety obok siebie zajmują 120 \* 2 czyli 240cm (co jest mniejsze odszerokości naczepy wynoszącej 250cm), na długość 80cm. zatem 30 palet to prostokat o długości 1200cm i szerokości 240cm. Pozostaje wolne miejsce o wymiarach długość: 1360cm - 1200cm = 160cm 8 szerokkość 250cm - tu sa ładowane 3 ostatnie palety: 80cm + 80cm + 80cm - co daje 240cm < 250cm na długość 120cm.
- na podstawie powyższego obliczenia należy zaprogramować dzaiłanie aplikacji w taki sposób, aby w momecie wybrania ładunku i kliknięcia przycisku "załaduj" obliczała ona: 1. ile pozostało wolnego miejsca po ostatnim załadunku wzgledem wybranej przestrzeni ładunklowej, 2. Czy wymiary podanego ładunku zmieszczą się na pozostałą przestrzeń 3. Ile pozostanie wolnej przestrzeni po załadunku.
- Nie poruszonu tu kwestii pietrowania palet, związanego z ich wysokością - będzie to doprecyzowane.
