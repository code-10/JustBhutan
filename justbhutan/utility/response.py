#Custom Algorithm to Create Response
def CreateResponse(columns,rows):
    result = []
    for row in rows:
        result.append(dict(tuple(zip(columns,row))))
    return result