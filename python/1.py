a = '  abc  '
print('+'+a.rstrip()+'+')

def func():
    c = 1
    def foo():
        nonlocal c
        c = 12
    foo()
    print(c)
func()