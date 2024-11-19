---
sidebar_position: 3
---
# Settings
The configuration of the setup. It determines what features will be added and how it functions.  
![Settings Part](/img/window_settings.jpg)

- **Default Color:** The starting color and what it will be reset to.
	HDR: Enables HDR ranges for the default color field and for setting a max brightness above 1. This is usually used for emission.
- **Max Brightness:** Enabled if HDR is enabled. Sets the max brightness (value) the Value slider can reach. Otherwise, max value is 1.
- **HSV Menu Controls:** Determines what controls to add such as Hue, Saturation, Value, Alpha, Reset.
	- Each control besides Reset adds 8 memory cost to parameters if 'Synced' is enabled.
- **Base Parameter Name:** An identifier for the name of the HSV menu and the current setup. It's also displayed in the removal menu.
- **Generated Assets Path:** Where any generated asset by EasyHSV is put. A unique folder is generated and used for each setup.
	- Folder Icon: Select a folder from the project window for the generated assets path.
	- Lightbulb Icon: If the path folder exists, highlights it in the project folder.
- **(Thry) Show Animated Properties Only:** If using Poiyomi, only properties marked as Animated will be shown.
- **(Thry) Auto-Target Renamed Properties:** If using Poiyomi, renamed properties will be automatically targetted if their base property is targetted.
- **Synced:** Recommended On. Syncs the HSVA parameters to other players. If disabled, other players won't see the color changes.