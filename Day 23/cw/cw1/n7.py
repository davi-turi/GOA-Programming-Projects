sentence=input("Enter sentence:")
symbol=input("Enter symbol:")

for i in range(len(sentence)):
    if sentence[i]==symbol:
        print(sentence[i],i)