def split_clone(symbol,string):
    res=[]
    s=""

    for i in string:
        if i==symbol:
            res.append(s)
            s=""
        else:
            s += i
    res.append(s)
    return res

print(split_clone(" ","hello how are you"))

