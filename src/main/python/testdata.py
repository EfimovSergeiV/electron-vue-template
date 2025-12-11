from time import sleep

for i in range(50):
    print(f'{{"msg": "error", "message": "err {i}"}}', flush=True)
    sleep(1)

