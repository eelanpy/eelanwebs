# Importing all needed python modules in general:
import json
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import string
import time

# Get all letter links with the link:


def get_all_film_letter_links():
    url = 'https://en.wikipedia.org/wiki/Lists_of_films'
    url_client = uReq(url)
    url_soup = soup(url_client, 'html.parser')
    links = []
    upper_alphabet = [i for i in string.ascii_uppercase] + ['number']
    for index, link in enumerate(url_soup.find_all('table')[0].find_all('a')):
        links.append('https://en.wikipedia.org' +
                     link['href'] + '#' + upper_alphabet[index])
    return links


# Get all films starting with the letter, given:

def get_all_films(movieUrl):
    url_client = uReq(movieUrl)
    url_soup = soup(url_client, 'html.parser')
    allMoviesLinks = [movie for div in url_soup.find_all(
        'div', {'class': 'div-col'}) for movie in div.find_all('li')]
    allMoviesDict = {}
    for movie in allMoviesLinks:
        movieName = str(movie.text)
        if movieName[0].lower() in movieUrl.split('#')[-1].lower():
            try:
                allMoviesDict[movieName] = {movie_link['title']: 'https://en.wikipedia.org' + movie_link['href']
                                            for movie_link in list(set([movieLink for movieLink in movie.find_all('a')]))}
            except:
                allMoviesDict[movieName] = []
        elif 'the' in movieName.lower()[0:5]:
            try:
                allMoviesDict[movieName] = {movie_link['title']: 'https://en.wikipedia.org' + movie_link['href']
                                            for movie_link in list(set([movieLink for movieLink in movie.find_all('a')]))}
            except:
                allMoviesDict[movieName] = []

    return allMoviesDict


# Run all movies and adding to results dict:
result = {}
movieUrl = [i for i in get_all_film_letter_links()]


def add_all_movies(movieUrls=get_all_film_letter_links()):
    mystr = ""
    for url in movieUrl:

        result.update(get_all_films(url))

        for x in range(0, len(items)):
            print("\nDone: " + url)

        time.sleep(5)
    time.sleep(1.5)


add_all_movies(movieUrl)

# Putting json or dictionary to json file(movies.json)


def put_all_movies_json(file_name, movie_dict):

    with open(file_name, 'w') as fp:
        json.dump(movie_dict, fp)
    print('Put all movies in json file: {}!'.format(file_name))


file_name = '/tmp/movies.json'
put_all_movies_json(file_name, result)
