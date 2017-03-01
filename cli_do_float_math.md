Bash cannot do float. Use Python.
```sh
python -c "print(1.23 / 3)"                # at least one was float
python -c "print(1 / float(3))"            # none were float
python -c "print(round(1 / float(3), 2))"  # round decimal
```
