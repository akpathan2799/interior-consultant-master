console.log('connected');
function toogleMenu(id) {

  let mobileNavigation = document.getElementById(id);
    let mobileNavigationStyle = window.getComputedStyle(mobileNavigation);
    if(mobileNavigationStyle.display == 'none' && mobileNavigationStyle.opacity == '0'){
        mobileNavigation.style.display = 'block' ;
        mobileNavigation.style.opacity='1';
    }else{
        mobileNavigation.style.display='none';
        mobileNavigation.style.opacity='0';
    }
}