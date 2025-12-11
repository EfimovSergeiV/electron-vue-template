from time import sleep


count = 0
while True:
    count += 1
    print(f'{count} message', flush=True)
    sleep(0.000001)

