Windows - Share Internet From Hotspot to Router
---

### Hotspot
- Enable

### PC with LAN + WLAN
- Connect Hotspot
- Switch LAN / WLAN `Interface metric` to allow internal IPs access 
	- Control Panel > Network and Sharing Center > Change adapter settings
	- Ethernet / Wlan:
	  - Right click > Properties > Internet Protocaol Version 4 - Properties > Advanced ...
	  - Uncheck Automatic matric > Interface metric:
		- `1` for WLAN - 1st priority - internet
		- `2` for LAN  - 2nd priority - internal IPs
- Share
	- LAN > Right click > Properties > Sharing > Allow ...

### Done
- All clients get normal and internet connection as usual.
