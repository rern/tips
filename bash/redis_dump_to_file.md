Redis - dump data / json to a file
---
```sh
pip install redis-dump-load

python
>>> import redisdl
data=open('data.json', 'w')
redisdl.dump(data)
# output: data.json
```
