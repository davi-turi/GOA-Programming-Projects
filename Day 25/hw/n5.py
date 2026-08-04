def longest_word(string_list):
    longest=string_list[0]
    for i in string_list:
        if len(i)>len(longest):
            longest=i
    return longest

print(longest_word(["hi", "bonjur", "hola", "hidroelectricstation"]))