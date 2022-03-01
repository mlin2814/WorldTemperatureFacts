from time import sleep
from os import path 
import os
import wikipedia
from pathlib import Path

while 1:
    testLocation1Create = Path('searchTerm.txt')
    testLocation1Create.touch(exist_ok=True)
    try:
        file = open('searchTerm.txt', 'r+')
        lines = file.readlines()

        if not lines:
            continue

        file.close()
        os.remove('searchTerm.txt')

        searchTerm = lines[0]
        newfile = open('summary.txt', 'w+')

        page = wikipedia.summary(searchTerm)

        print(page)

        if searchTerm:
            newfile.write(page)
        else:
            newfile.write(wikipedia.suggest(searchTerm))

        if newfile.closed == False:
            newfile.close()
    except FileNotFoundError:
        continue
