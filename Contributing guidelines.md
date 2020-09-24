## Co będzie ładowane w samochody?
Wyłączenie o ładunkach częściowych, tzw. drobnicy – nie uwzględniamy ładunków cało pojazdowych.

## Wstępny plan apliakcji:
Projekt ma dwie fazy i trzy główne elementy:

* Faza i pierwszy element to aplikacja do zarządzania przestrzenią ładunkową pojazdów.
* Faza to dwa elementy, aplikacja do zgłaszania wolnych ładunków i przestrzeni ładunkowych oraz drugi element łączenie jednego z drugim i automatyzacja planowania.

* Aplikacja do zarządzania przestrzenią ładunkową, jest to najprostszy element, w związku z tym najszybciej do zrobienia i wdrożenia. Założenia to możliwość szybkiego wyboru typowej przestrzeni ładunkowej oraz typowych nośników oraz możliwość rozplanowania ładunku w przestrzeni ręcznie lub automatycznie. Dodatkowa opcja (może nawet płatna) to możliwość ręcznego wprowadzenia wymiarów zarówno przestrzeni jak i wymiarów elementów. Myślę o wersji opisowej na bazie formularzy oraz wersji graficznej na bazie danych z formularzy. Po podaniu wymaganych danych lub wyborze standardów, automat przelicza ile zostanie jeszcze wolnej przestrzeni na wybranej przestrzeni i ma możliwość automatycznego zaplanowania ułożenia.
* Aplikacja do zgłaszania wolnych ładunków i wolnych przestrzeni ładunkowych. Onlinie, zgłoszenia na bazie wyłącznie formularzy z wykorzystaniem bazy danych i możliwości przesyłania formularzy do własnego API. Po przetworzeniu API zwraca informacje na stronę w postaci kolejnych wpisów, można je filtrować po zadanych parametrach. To grubszy temat z wykorzystaniem wiedzy Full stack – głównie w back-end i pewnie dedykowanego serwera.
* Planowanie – to aplikacja na bazie dwóch poprzednich, wykorzystanie wolnej powierzchni ładunkowej „mojego” pojazdu na podstawie danych (zapytań) przesłanych przez klientów w aplikacji do zgłaszania.

Do tego automat, który kontaktuje się z klientem, potwierdza daty odbiorów, dostaw i ceny.
