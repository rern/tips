Philips downlight lower brightness mod
--- 

![back](https://github.com/rern/tips/blob/master/LED_downlight_brightness_mod/back.jpg) 
![circuit](https://github.com/rern/tips/blob/master/LED_downlight_brightness_mod/circuit.jpg)
**Measurement:**  
- V supply = 300V  
- V led = 80V  
- I led = 180mA 
![board](https://github.com/rern/tips/blob/master/LED_downlight_brightness_mod/board.jpg)  
  
**Modify to lower brightness**  
- remove retention springs
- open back cover (insert paper clips on both sides of each teeth before prying open)
- remove 3.3 ohms RS1 resister (current sense resisters RS1||RS2 : 3.9||3.3 = 1.8 ohms --> 3.9 ohms)
- assemble back
- brightness lowered by half
- replace RS2 with `more|less` value to `less|more` brightness ( I led = 600mA / 2xR )

![removed](https://github.com/rern/tips/blob/master/LED_downlight_brightness_mod/removed.jpg)
