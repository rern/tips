**stdin, stdout, stderr**  

`command1 | command2` : stdin pipe to command2  
`command > file` : stdout to file  
`command 2> file` : stderr to file  
`command 2>&1` : stderr to stdout  
`command &> /dev/null` : suppress stdout and stderr  
