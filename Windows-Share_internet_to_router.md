Windows - Share Internet From Hotspot to Router
---

### Master Hotspot
- Enable Hotspot

### PC with LAN + WLAN
- Connect Hotspot
- Set `Interface metric` - LAN / WLAN priority setting
	- Control Panel > Network and Sharing Center > Change adapter settings
	- Ethernet / Wlan:
	  - Right click > Properties > Internet Protocaol Version 4 - Properties > Advanced ...
	  - Uncheck Automatic matric > Interface metric:
		- `1` for Wlan     - 1st priority - internet
		- `2` for Ethernet - 2nd priority - internal IPs
- Sharing
	- Ethernet > Right click > Properties > Sharing > Allow ...

### Done
- All clients of the router get internet connection from the Hotspot.
