surname = input("Enter your surname: ")
index = surname.find("shvili")
found=False

for i in range(len(surname)):
    if i == index:
        found=True

print(found)