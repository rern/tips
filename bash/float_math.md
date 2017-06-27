Bash cannot do float. Use Python.
```sh
python -c "print(1.23 / 3)"                # 0.41 - float
python -c "print(1 / float(3))"            # 0.33333333333333 - integer
python -c "print(round(1 / float(3), 2))"  # round decimal
```
