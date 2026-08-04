nums=[44,67,32,45,90]
num=input("enter your favourite number:")
index=int(input("enter index:"))

if index >= 0 and index<len(nums):
    nums.insert(index,num)
    print(nums)
else:
    print("invalid index")