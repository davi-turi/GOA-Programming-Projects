surname=input("enter your surame:")
case=input("In what case would you like to change your surname? upper/lower/capitalize or none:")

if case=="upper":
    print(surname.upper())
elif case=="lower":
    print(surname.lower())
elif case=="capitalize":
    print(surname.capitalize())
elif case=="none":
    print(surname)
else:print("Incorrect input")
