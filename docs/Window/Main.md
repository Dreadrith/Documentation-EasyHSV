---
sidebar_position: 2
---
# Main
This is where you select the stuff that are affected by the tool.  
![Main Part](/img/window_main.jpg)

- **Globe Icon:**
	- Left Click: Select a language.
	- Right Click: Set current language as globally preferred language.
- **\*Avatar:** The Avatar to add HSV Coloring to.
	- Avatar requires a VRCAvatarDescriptor component to be selectable.
	- On selection, automatically fills the FX, Menu & Parameters with the Avatar's.
- **Target FX\*:** The animator controller to add HSV Coloring to.
- **Target Menu\*:** The expressions menu to add the HSV coloring submenu to.
	- Displays the control slot usage.
	- List Button: Opens a tree view of the menu for easier selection of a submenu.
- **Target Parameters\*:** The expression parameters to add the HSV coloring parameters to.
	- Displays the memory cost and remaining memory.
- **\*Custom Object field:** These fields are custom made to provide better functionality than the regular object fields.
	- Left click if valid: Pings the asset in the project window.
	- Left click if invalid / Right click: Shows a menu to select or create a new asset.
	- Folder icon: Select an asset from the project for the field.
	- Folder+ icon: Create a new asset for the field.
	- Automatically displays a warning with a tooltip if the input is invalid.
	- Field is colored green if valid and yellow if invalid.