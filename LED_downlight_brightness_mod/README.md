Philips downlight lower brightness mod
--- 

### Eridani DL190B
<img src="https://github.com/rern/tips/blob/master/LED_downlight_brightness_mod/Philips-Eridani.jpg" width=600>
<img src="https://github.com/rern/tips/blob/master/LED_downlight_brightness_mod/Philips-Eridani-DP5911A.jpg" width=600>

**Modify to lower brightness**
- Remove front diffuser
- Remove a resister
<hr>

### Marcacite 59523
<img src="https://github.com/rern/tips/blob/master/LED_downlight_brightness_mod/back.jpg" width=600>
<img src="https://github.com/rern/tips/blob/master/LED_downlight_brightness_mod/circuit.jpg" width=1000>

**Measurement:**  
- V supply = 300V  
- V led = 80V  
- I led = 180mA   
<img src="https://github.com/rern/tips/blob/master/LED_downlight_brightness_mod/board.jpg" width=600>

**Modify to lower brightness**  
- remove retention springs
- open back cover (insert paper clips on both sides of each teeth before prying open)
- remove 3.3 ohms RS1 resister (current sense resisters RS1||RS2 : 3.9||3.3 = 1.8 ohms --> 3.9 ohms)
- assemble back
- brightness lowered by half
- replace RS2 with `more|less` value to `less|more` brightness ( I led = 600mA / 2xR )

<img src="https://github.com/rern/tips/blob/master/LED_downlight_brightness_mod/removed.jpg" width=600>
