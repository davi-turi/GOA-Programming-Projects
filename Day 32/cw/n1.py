def join_clone(symbol,list):
    res=""

    for i in list:
        res += i+symbol
    
    return res[ :len(symbol)*-1]

print(join_clone("£",["how","are","you"]))