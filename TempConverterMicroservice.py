from time import sleep
import os
from pathlib import Path


def createFiles(fileName):
    testLocation1Create = Path(fileName)
    testLocation1Create.touch(exist_ok=True)

def writeToFile(file):
    fileName = file + '.txt'
    fileRead= open(fileName, 'r+')
    lines = fileRead.readlines()

    try:
        for line in lines:
            if not line:
                break
            else:
                fileRead.close()
                os.remove(fileName)
                fileWrite = open(file + '_done.txt', 'w+')
                intLine = float(line)
                celsius = (intLine - 32) * 5.0/9.0
                fileWrite.write(str(round(celsius,2)))
                fileWrite.flush()
                fileWrite.close()

    except OSError:
        print('File still open')

    if  fileRead.closed == False:
        fileRead.close()

while 1:
    createFiles('Location1.txt')
    createFiles('Location2.txt')

    writeToFile('Location1')
    writeToFile('Location2')

    sleep(10)
