JP1 Remote - How To
---
```
[RMIR - Open *.rmir Download / Upload remote]


Install Extender:
Insert batteries > connect JP1 connector > RMIR > Open rmdu file > Remote > Upload to Remote

Activation: 	Disconnect JP1 > TV button > OK button -> device button flashes 4 times

Deactivation:	Long-press "Setup" -> device button flashes 4 times

Macro = One button for all devices
DSM (Device Specific Macro) = Button for imported another device button

Build Discrete On/Off for unavailable code:
Special Function tab > New > Type: ToadTog, Toggle #: (1 number for a pair of On/Off), Condition: ForceOn / ForceOff
	Discrete On: Already On - (blank), Off>On - Power
	Discrete Off: Already On>Off - Power, Already Off - (blank)

Clear Memory:	Long-press "Setup" -> device button flashes 2 times -> 9 8 0 -> device button flashes 4 times



Learn IR to Build New rmdu (Remote Master Device Upgrade file):
---------------------------------------------------------------------------------------------------------------
Backup Extender:
Remote > Download from Remote
File > Save as... > [rmir backup file]

Hard Reset:
Long-press "Setup" -> device button flashes 4 times
Long-press "Setup" -> device button flashes 2 times -> 9 8 1 -> device button flashes 4 times

Learn:		
Long-press "Setup" -> device button flashes 2 times -> 9 7 5 -> device button flashes 2 times
		"Device X" ->
		"Key X" -> learn -> device button flashes 2 times
		"Key Y" -> learn -> device button flashes 2 times
		...
Long-press "Setup" -> device button flashes 2 times

Download:
RMIR
Remote > Download from Remote
Learned Signals tab > write down Protocol, Device, Sub Device > shift-select all 'Key' column > right-click Copy
Devices tab > New > 
	Setup tab > Device Type: [select] > Setup Code: [any new 4 digits] > Protocol: [select as learned] > Protocol Parameters: [fill as learned] >
	Functions tab > Clean up > New > right-click 1st blank Name > Paste(IE) > OK
Learned Signals tab > shift-select all Hex Cmds > right-click Copy
Devices tab > Select Device > Edit > Functions tab > right-click 1st Hex > Paste(IE) > OK
Devices tab > Select Device > Edit > Functions tab > double-click Name to edit > Save as > [new rmdu file]

Restore Extender:
File > Open > [backup rmir backup file] > Remote > Upload to Remote

Reactivation: 
Disconnect JP1 > TV button > OK button -> device button flashes 4 times
```
