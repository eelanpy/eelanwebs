import json
import requests

api_url = "https://restcountries.com/v3.1/all"
response = requests.get(api_url)
data = response.json()

def getCountryFull(cc):
    names = {}
    for i in data:
        names[i['cca2']] = i['name']['official']
    return names[cc]

print(getCountryFull('CA'))
# # Opening JSON file
# f = open('cc.json')
#
# # returns JSON object as
# # a dictionary
# data = json.load(f)
# print(len(data[0]))
# names = [data[i]['name']['official'] for i in range(33)]
