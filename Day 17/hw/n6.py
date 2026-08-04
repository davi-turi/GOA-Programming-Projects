integers=[335,-54,24,97,-41,60,-4]
positive= 0
negative= 0

for i in integers:
    if i>0:
        positive += i
    elif i<0:
        negative += 1
    else:
        print("zero")
print(positive)
print(negative)