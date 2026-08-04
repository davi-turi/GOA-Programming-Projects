names={"gvanca", "giorgi", "beqa","mari", "lizi", "ana"}
your_name=input("Enter your name:")

if your_name in names:
    print("ეს სახელი არის სეტში და აღარ დაემატება")
else:
    names.add(your_name)

print(names)