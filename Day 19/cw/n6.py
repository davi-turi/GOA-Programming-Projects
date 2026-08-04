list=[11,22,33,44,55]
start=int(input("Enter number:"))
stop=int(input("Enter number:"))

if start<stop and start>=0 and start<=4 and stop>=1 and stop<=4:
    print(list[start:stop])
else:
    print("Incorrect index!")