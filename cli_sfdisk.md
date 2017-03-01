```sh
sfdisk /dev/sdx <<<'start,size,type,bootable'
```
default  
`start` first available sector  
`size` largest from start  
`type` ext4  
`bootable` no  

Create single partition
```sh
sfdisk /dev/sdx <<<';'
```

Create single FAT partition
```sh
sfdisk /dev/sdx <<<',,c;'
```

Create 2 partitions: 2.4GB + the rest
```sh
sfdisk /dev/sdx <<<',2.4G;'
```

Create 3 partitions: 2.4GB + the rest
```sh
sfdisk /dev/sdx <<<',2.4G,1.2G;'
```
