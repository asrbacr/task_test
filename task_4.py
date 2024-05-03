# Задача 4. Написать метод, который в консоль выводит таблицу умножения. 
# На вход метод получает число, до которого выводит таблицу умножения. 
# В консоли должна появиться таблица. 
# Например, если на вход пришло число 5, то получим:

def print_multiplication_table(number):
    matrix_res = [[(i * j) for i in range(1, number + 1)]
                  for j in range(1, number + 1)]
    for i in matrix_res:
        print(*[f'{x:>4}' for x in i])


print_multiplication_table(5)