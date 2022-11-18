output = ['Bob', 'Belinda', 'Betty', 'Bubba', 'Billy', 'Betsy', 'Bo', 'Beu', 'Beau', '10']
phoneNumber = [1234, 1122, 1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888]

for count, element in enumerate(output):
        print(f"Output example: {count}. {element}, phone:{phoneNumber[count]}")

output.pop(3)
phoneNumber.pop(3)
for count, element in enumerate(output):
        print(f"Output example: {count}. {element}, phone:{phoneNumber[count]}")

changer = int(input("Which number do you want to change? "))
new_output = input("What name do you want to change? ")
new_phoneNumber = int(input("Which phoneNumber do you want to change?"))

output[changer] = new_output
phoneNumber[changer] = new_phoneNumber

for count, element in enumerate(output):
        print(f"Output example: {count}. {element}, phone:{phoneNumber[count]:5}")

output.append('Bob')
phoneNumber.append(1234)

for count, element in enumerate(output):
        print(f"Output example: {count}. {element}, phone:{phoneNumber[count]:5}")