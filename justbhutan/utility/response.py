#Custom Algorithm to Convert List to JSON format
def convertListToJson(rows,keys):
    dictionary = {}
    listOfDictionary = [{}]
    count=0
    for i in rows:
        for j in i:
            dictionary[keys[count%len(keys)]]=j
            count=count+1
            length = len(keys)
            if(count%length==0):
                listOfDictionary.append(dictionary.copy())
                dictionary.clear()
    del listOfDictionary[0]
    return listOfDictionary