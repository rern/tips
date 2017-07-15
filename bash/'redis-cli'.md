Redis
---

`redis-cli` : interractive shell  
`redis-cli command ...` : syntax  

`keys *` : list all keys  
`type key` : get type of key  

**type 'string'**  
`set key value` : set value of key  
`get key` : get value of key  

**type 'hash'**  
`hset key name value` : set value of name in key  
`hget key name` get value of name in key  
`hgetall key` : get all name:value pairs in key  

**type 'set'**  
`mset key value` : set value of key  
`mget key` : get value of key  
