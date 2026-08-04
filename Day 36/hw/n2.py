items = set()

num = int(input("Enter how many animals do you want to add?:"))

for i in range(num):
    animal = input("Enter an animal:")
    items.add(animal)

items.clear()