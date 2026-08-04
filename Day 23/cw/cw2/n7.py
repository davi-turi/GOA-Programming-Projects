names=["nini","nanita","nata","nilea"]
index=int(input("enter index:"))

if index >= 0 and index<len(names):
    names.pop()
    print(names)
else:
    print("invalid index")