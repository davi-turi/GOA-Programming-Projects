def add(string, index):
    list=["nia", "toma", "maia", "nika"]
    
    if 0 <= index <= len(list):
        print(list.insert(index,string))
    else:
        print("invalid index")
    
    print(list)


add("nini",2)