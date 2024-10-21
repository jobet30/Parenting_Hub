({
    toggleResourcesDropdown : function(component) {
        let isOpen = component.get("v.isResourcesOpen");
        component.set("v.isResourcesOpen", !isOpen);
    },
    
    toggleUserMenu : function(component) {
        let isOpen = component.get("v.isUserMenuOpen");
        component.set("v.isUserMenuOpen", !isOpen);
    }
})
